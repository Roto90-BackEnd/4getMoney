import React, {useState} from 'react';
import '../styles/ApplicationForm.css';

interface ApplicationFormProps {
    studyTitle: string;
    onSubmit: (message: string) => void;
    onClose: () => void;
}

const ApplicationForm: React.FC<ApplicationFormProps> = ({studyTitle, onSubmit, onClose}) => {
    const [message, setMessage] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!message.trim()) {
            alert('내용을 입력해주세요.');
            return;
        }
        onSubmit(message);
    };

    return (
        <form onSubmit={handleSubmit} className="application-form">
            <h3 className="form-title">'{studyTitle}' 참가 신청 </h3>
            <p className="form-description">
                모임장에게 자신을 간략하게 소개하고, 스터디에 참여하고 싶은 의지를 보여주세요.
            </p>
            <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="ex) 안녕하세요! React 실무 경험을 쌓고 싶어 지원합니다. 주 1회 스터디 꾸준히 참여 가능합니다."
                rows={7}
                required
                />
            <div className="form-actions">
                <button type="button" className="cancel-btn" onClick={onClose}> 취소 </button>
                <button type="submit" className="submit-btn"> 참가 신청 </button>
            </div>
        </form>
    );
};

export default ApplicationForm;