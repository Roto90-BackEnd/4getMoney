import React, { useState } from 'react';
import { StudyRoom } from '../types/study';
import TagInput from "./TagInput";
import '../styles/CreateStudyForm.css';

// 2. 선택 가능한 태그 목록 정의
const AVAILABLE_ROLES = ["프론트엔드", "백엔드", "디자이너", "기획자", "데브옵스"];
const AVAILABLE_TAGS = ["React", "Vue", "Spring", "Node.js", "TypeScript", "Figma", "AWS"];

// 폼 상태를 위한 타입 정의
// roles와 tags는 string[] 이므로 제외하고, requirements는 string으로 유지합니다.
type StudyFormBase = Omit<StudyRoom, 'id' | 'status' | 'currentMembers' | 'postedAt' | 'roles' | 'tags' | 'requirements'>;
interface FormSpecificFields {
    roles: string[];
    tags: string[];
    requirements: string; // 요구 조건은 자유 텍스트로 유지
}
type StudyFormData = StudyFormBase & FormSpecificFields;

const CreateStudyForm: React.FC = () => {
    // 3. roles와 tags의 state 타입을 string[]으로 변경
    const [formData, setFormData] = useState<StudyFormData>({
        title: '',
        description: '',
        category: '프로그래밍',
        maxMembers: 4,
        roles: [],
        requirements: '',
        tags: [],
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: name === 'maxMembers' ? parseInt(value, 10) : value }));
    };

    // 4. TagInput의 변경을 처리할 함수 추가
    const handleTagsChange = (fieldName: 'roles' | 'tags', newTags: string[]) => {
        setFormData(prev => ({ ...prev, [fieldName]: newTags }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // 5. roles와 tags는 이미 배열이므로 변환 로직 제거, requirements는 유지
        const submissionData = {
            ...formData,
            requirements: formData.requirements.split(',').map(s => s.trim()).filter(s => s),
        };
        console.log('생성될 스터디 정보:', submissionData);
        // TODO: 여기서 서버로 데이터를 전송하는 API를 호출합니다.
    };

    return (
        <>
            <h2 className="form-title">스터디 생성</h2>
            <form onSubmit={handleSubmit} className="create-study-form">
                <div className="form-group">
                    <label htmlFor="title">스터디 제목</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        placeholder="스터디 제목을 입력하세요"
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="description">스터디 설명</label>
                    <textarea
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        placeholder="스터디에 대해 설명해주세요"
                        rows={5}
                        required
                    />
                </div>

                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="category">카테고리</label>
                        <select id="category" name="category" value={formData.category} onChange={handleChange}>
                            <option value="프로그래밍">프로그래밍</option>
                            <option value="디자인">디자인</option>
                            <option value="취업">취업</option>
                            <option value="어학">어학</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="maxMembers">최대 인원</label>
                        <input
                            type="number"
                            id="maxMembers"
                            name="maxMembers"
                            value={formData.maxMembers}
                            onChange={handleChange}
                            min="2"
                            max="10"
                            required
                        />
                    </div>
                </div>

                {/* 6. 모집 역할 input을 TagInput 컴포넌트로 교체 */}
                <TagInput
                    label="모집 직무"
                    availableTags={AVAILABLE_ROLES}
                    selectedTags={formData.roles}
                    onTagsChange={(newTags) => handleTagsChange('roles', newTags)}
                />

                <div className="form-group">
                    <label htmlFor="requirements">요구 조건</label>
                    <input
                        type="text"
                        id="requirements"
                        name="requirements"
                        value={formData.requirements}
                        onChange={handleChange}
                        placeholder="쉼표(,)로 조건을 구분하여 입력 (예: React 경험, 주 1회 참여)"
                    />
                </div>

                {/* 6. 기술 스택 input을 TagInput 컴포넌트로 교체 */}
                <TagInput
                    label="기술 스택"
                    availableTags={AVAILABLE_TAGS}
                    selectedTags={formData.tags}
                    onTagsChange={(newTags) => handleTagsChange('tags', newTags)}
                />

                <div className="form-actions">
                    <button type="submit" className="submit-btn">생성하기</button>
                </div>
            </form>
        </>
    );
};

export default CreateStudyForm;