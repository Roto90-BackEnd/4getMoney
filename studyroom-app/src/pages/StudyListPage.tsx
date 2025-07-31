import React, { useState, useEffect } from 'react';
import { StudyRoom } from '../types/study';
import StudyRoomCard from '../components/StudyRoomCard';
import Modal from '../components/Modal';
import CreateStudyForm from "../components/CreateStudyForm";
import '../styles/StudyListPage.css';

const mockStudyRooms: StudyRoom[] = [
    // 프론트엔드 (8개)
    { id: 1, status: 'recruiting', location: '서울', job: '프론트엔드', category: '프론트엔드', title: 'React 신입 스터디', host: '리액트초보', postedAt: '3시간 전', roles: ['스터디원 3명'], requirements: ['HTML/CSS 기본'], tags: ['#React', '#신입'], currentMembers: 1, maxMembers: 4 },
    { id: 2, status: 'recruiting', location: '온라인', job: '프론트엔드', category: '프론트엔드', title: 'Next.js 프로젝트 실습', host: 'Next고수', postedAt: '1일 전', roles: ['팀원 2명'], requirements: ['React 경험자'], tags: ['#NextJS', '#실전'], currentMembers: 2, maxMembers: 4 },
    { id: 3, status: 'closed', location: '경기', job: '프론트엔드', category: '프론트엔드', title: 'Vue.js 스터디 (마감)', host: '뷰장인', postedAt: '3일 전', roles: ['스터디원 4명'], requirements: ['JavaScript 중급'], tags: ['#VueJS', '#마감'], currentMembers: 5, maxMembers: 5 },
    { id: 4, status: 'recruiting', location: '서울', job: '프론트엔드', category: '프론트엔드', title: 'TypeScript 심화 스터디', host: '타입스크립터', postedAt: '5일 전', roles: ['멤버 2명'], requirements: ['TypeScript 사용 경험'], tags: ['#TypeScript', '#심화'], currentMembers: 3, maxMembers: 5 },
    { id: 5, status: 'recruiting', location: '부산', job: '프론트엔드', category: '프론트엔드', title: '웹 성능 최적화 스터디', host: '최적화맨', postedAt: '6일 전', roles: ['스터디원 3명'], requirements: ['프론트엔드 개발 경험'], tags: ['#성능', '#최적화'], currentMembers: 1, maxMembers: 4 },
    { id: 6, status: 'closed', location: '온라인', job: '프론트엔드', category: '프론트엔드', title: '코딩 테스트 대비 (프론트)', host: '알고리즘', postedAt: '1주 전', roles: ['참가자 5명'], requirements: ['JavaScript'], tags: ['#코테', '#알고리즘'], currentMembers: 6, maxMembers: 6 },
    { id: 7, status: 'recruiting', location: '서울', job: '프론트엔드', category: '프론트엔드', title: 'Svelte 단기 집중 스터디', host: '스벨트팬', postedAt: '10일 전', roles: ['스터디원 2명'], requirements: ['프레임워크 경험자'], tags: ['#Svelte', '#단기'], currentMembers: 1, maxMembers: 3 },
    { id: 8, status: 'recruiting', location: '인천', job: '프론트엔드', category: '프론트엔드', title: 'UI/UX 디자이너와 협업 프로젝트', host: '기획자', postedAt: '12일 전', roles: ['프론트 개발자 1명'], requirements: ['포트폴리오 필요'], tags: ['#협업', '#포트폴리오'], currentMembers: 2, maxMembers: 3 },

    // 백엔드 (9개)
    { id: 9, status: 'recruiting', location: '온라인', job: '백엔드', category: '백엔드', title: 'Spring Boot 기초부터', host: '스프링새싹', postedAt: '2시간 전', roles: ['신입 3명'], requirements: ['Java 기초'], tags: ['#SpringBoot', '#Java'], currentMembers: 2, maxMembers: 5 },
    { id: 10, status: 'recruiting', location: '서울', job: '백엔드', category: '백엔드', title: 'Node.js & Express 프로젝트', host: '노드마스터', postedAt: '2일 전', roles: ['백엔드 개발자 2명'], requirements: ['JavaScript/TypeScript'], tags: ['#NodeJS', '#Express'], currentMembers: 1, maxMembers: 3 },
    { id: 11, status: 'closed', location: '온라인', job: '백엔드', category: '백엔드', title: '대용량 트래픽 처리 설계 스터디', host: '설계고수', postedAt: '4일 전', roles: ['경력자 3명'], requirements: ['백엔드 3년 이상'], tags: ['#MSA', '#설계'], currentMembers: 4, maxMembers: 4 },
    { id: 12, status: 'recruiting', location: '경기', job: '백엔드', category: '백엔드', title: 'Django로 만드는 웹 서비스', host: '장고러버', postedAt: '1주 전', roles: ['스터디원 2명'], requirements: ['Python 기본'], tags: ['#Django', '#Python'], currentMembers: 2, maxMembers: 4 },
    { id: 13, status: 'recruiting', location: '대구', job: '백엔드', category: '백엔드', title: 'JPA/QueryDSL 정복하기', host: '쿼리장인', postedAt: '8일 전', roles: ['멤버 3명'], requirements: ['Spring 경험'], tags: ['#JPA', '#QueryDSL'], currentMembers: 1, maxMembers: 4 },
    { id: 14, status: 'closed', location: '서울', job: '백엔드', category: '백엔드', title: 'NestJS 스터디 (마감)', host: '둥지개발자', postedAt: '11일 전', roles: ['참가자 4명'], requirements: ['Node.js 경험'], tags: ['#NestJS', '#마감'], currentMembers: 5, maxMembers: 5 },
    { id: 15, status: 'recruiting', location: '온라인', job: '백엔드', category: '백엔드', title: 'Go 언어 스터디 모집', host: '고퍼', postedAt: '13일 전', roles: ['스터디원 3명'], requirements: ['프로그래밍 경험'], tags: ['#Go', '#Golang'], currentMembers: 1, maxMembers: 4 },
    { id: 16, status: 'recruiting', location: '광주', job: '백엔드', category: '백엔드', title: 'Kotlin + Spring 프로젝트', host: '코틀리너', postedAt: '15일 전', roles: ['백엔드 1명'], requirements: ['Spring 경험'], tags: ['#Kotlin', '#Spring'], currentMembers: 2, maxMembers: 3 },
    { id: 17, status: 'closed', location: '온라인', job: '백엔드', category: '백엔드', title: '코딩 테스트 대비 (백엔드)', host: '코테준비생', postedAt: '2주 전', roles: ['참가자 5명'], requirements: ['자료구조/알고리즘'], tags: ['#코테', '#백준'], currentMembers: 6, maxMembers: 6 },

    // 모바일 (Android/iOS) (6개)
    { id: 18, status: 'recruiting', location: '서울', job: '안드로이드', category: '모바일', title: '코틀린으로 앱 만들기', host: '안드초보', postedAt: '1일 전', roles: ['스터디원 2명'], requirements: ['열정'], tags: ['#Android', '#Kotlin'], currentMembers: 1, maxMembers: 3 },
    { id: 19, status: 'recruiting', location: '온라인', job: 'iOS', category: '모바일', title: 'SwiftUI 사이드 프로젝트', host: '애플팬', postedAt: '3일 전', roles: ['iOS 개발자 1명'], requirements: ['Swift 경험'], tags: ['#iOS', '#SwiftUI'], currentMembers: 2, maxMembers: 3 },
    { id: 20, status: 'closed', location: '경기', job: '안드로이드', category: '모바일', title: 'Jetpack Compose 스터디', host: '컴포저', postedAt: '1주 전', roles: ['멤버 3명'], requirements: ['안드로이드 경험'], tags: ['#Compose', '#마감'], currentMembers: 4, maxMembers: 4 },
    { id: 21, status: 'recruiting', location: '온라인', job: 'iOS', category: '모바일', title: 'RxSwift 스터디', host: '반응형프로그래머', postedAt: '9일 전', roles: ['스터디원 2명'], requirements: ['iOS 개발 경험'], tags: ['#RxSwift', '#iOS'], currentMembers: 1, maxMembers: 3 },
    { id: 22, status: 'recruiting', location: '서울', job: '안드로이드', category: '모바일', title: 'Clean Architecture 스터디', host: '아키텍트', postedAt: '14일 전', roles: ['경력자 2명'], requirements: ['안드로이드 2년 이상'], tags: ['#Architecture', '#클린코드'], currentMembers: 1, maxMembers: 3 },
    { id: 23, status: 'closed', location: '온라인', job: 'iOS', category: '모바일', title: 'TCA 스터디 (마감)', host: 'TCA전도사', postedAt: '20일 전', roles: ['참가자 4명'], requirements: ['SwiftUI 경험'], tags: ['#TCA', '#마감'], currentMembers: 5, maxMembers: 5 },

    // 기타 (DevOps/CS/AI) (7개)
    { id: 24, status: 'recruiting', location: '온라인', job: 'DevOps', category: '기타', title: 'Docker & Kubernetes 기초', host: '데브옵스꿈나무', postedAt: '4일 전', roles: ['스터디원 3명'], requirements: ['Linux 기본'], tags: ['#Docker', '#Kubernetes'], currentMembers: 2, maxMembers: 5 },
    { id: 25, status: 'closed', location: '서울', job: 'CS', category: 'CS', title: '네트워크 스터디 (완료)', host: '네트워크박사', postedAt: '1주 전', roles: ['참가자 5명'], requirements: ['컴퓨터 전공자'], tags: ['#네트워크', '#CS'], currentMembers: 6, maxMembers: 6 },
    { id: 26, status: 'recruiting', location: '온라인', job: 'AI', category: 'AI', title: 'PyTorch 논문 구현 스터디', host: 'AI연구원', postedAt: '6일 전', roles: ['연구원 2명'], requirements: ['PyTorch 경험'], tags: ['#AI', '#PyTorch'], currentMembers: 1, maxMembers: 3 },
    { id: 27, status: 'recruiting', location: '경기', job: 'DevOps', category: '기타', title: 'CI/CD 파이프라인 구축 실습', host: '젠킨스맨', postedAt: '10일 전', roles: ['멤버 2명'], requirements: ['개발 경험'], tags: ['#CI/CD', '#Jenkins'], currentMembers: 2, maxMembers: 4 },
    { id: 28, status: 'recruiting', location: '대전', job: 'CS', category: 'CS', title: '운영체제(OS) 스터디', host: '공룡책', postedAt: '12일 전', roles: ['스터디원 3명'], requirements: ['전공/비전공 무관'], tags: ['#OS', '#CS'], currentMembers: 1, maxMembers: 4 },
    { id: 29, status: 'closed', location: '온라인', job: 'AI', category: 'AI', title: '머신러닝 기초 스터디 (마감)', host: '머신러너', postedAt: '18일 전', roles: ['참가자 5명'], requirements: ['Python'], tags: ['#머신러닝', '#AI'], currentMembers: 6, maxMembers: 6 },
    { id: 30, status: 'recruiting', location: '온라인', job: 'CS', category: 'CS', title: '자료구조 & 알고리즘 스터디', host: '알고리즘정복', postedAt: '20일 전', roles: ['스터디원 4명'], requirements: ['프로그래밍 언어 1개 이상'], tags: ['#자료구조', '#알고리즘'], currentMembers: 1, maxMembers: 5 },
];

function StudyListPage() {
    const [searchTerm, setSearchTerm] = useState('');
    const [locationFilter, setLocationFilter] = useState('전체');
    const [jobFilter, setJobFilter] = useState('전체');
    const [showRecruitingOnly, setShowRecruitingOnly] = useState(false);

    const filteredRooms = useMemo(() => {
        return mockStudyRooms.filter(room => {
            if (showRecruitingOnly && room.status !== 'recruiting') {
                return false;
            }
            if (locationFilter !== '전체' && room.location !== locationFilter) {
                return false;
            }
            if (jobFilter !== '전체' && room.job !== jobFilter) {
                return false;
            }
            if (searchTerm && !room.title.toLowerCase().includes(searchTerm.toLowerCase())) {
                return false;
            }
            return true;
        });
    }, [searchTerm, locationFilter, jobFilter, showRecruitingOnly]);

    return (
        <>
            <div className="filter-container">
                <input
                    type="text"
                    placeholder="스터디룸 찾기"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="search-input"
                />
                <select value={locationFilter} onChange={(e) => setLocationFilter(e.target.value)}>
                    <option value="전체">지역 (전체)</option>
                    <option value="서울">서울</option>
                    <option value="경기">경기</option>
                    <option value="온라인">온라인</option>
                </select>
                <select value={jobFilter} onChange={(e) => setJobFilter(e.target.value)}>
                    <option value="전체">직무 (전체)</option>
                    <option value="프론트엔드">프론트엔드</option>
                    <option value="백엔드">백엔드</option>
                    <option value="안드로이드">안드로이드</option>
                </select>
                <label>
                    <input
                        type="checkbox"
                        checked={showRecruitingOnly}
                        onChange={(e) => setShowRecruitingOnly(e.target.checked)}
                    />
                    모집 중인 스터디만 보기
                </label>
            </div>

            <div className="study-grid">
                {filteredRooms.map((room) => (
                    <StudyRoomCard key={room.id} room={room} />
                ))}
            </div>
        </>
    );
}

export default StudyListPage;