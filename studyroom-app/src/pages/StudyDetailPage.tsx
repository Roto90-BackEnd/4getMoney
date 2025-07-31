import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { StudyRoom } from '../types/study';
import StudyDetailView from '../components/StudyDetailView';
import Modal from '../components/Modal';
import ApplicationForm from "../components/ApplicationForm";

// 임시 데이터 (목록 페이지의 데이터와 동일한 것을 사용)
const FAKE_STUDY_ROOMS: StudyRoom[] = [
    { id: '1', title: 'React 스터디', description: 'React 심화 학습 스터디입니다. \n\n다양한 실습을 통해 실력을 키워봅시다.', category: '프로그래밍', status: 'open', maxMembers: 4, currentMembers: 2, roles: ['프론트엔드', '주니어'], requirements: ['React 기본 지식', '주 1회 온라인 참여'], tags: ['React', 'TypeScript', 'Next.js'] },
    { id: '2', title: '코딩 테스트 대비', description: '코딩 테스트를 함께 준비합니다.', category: '프로그래밍', status: 'closed', maxMembers: 6, currentMembers: 6, roles: ['알고리즘'], requirements: ['PS 경험자'], tags: ['Java', 'C++'] },
    { id: '3', title: 'Vue.js 기초부터 실전까지', description: 'Vue.js를 함께 공부하고 토이 프로젝트를 만듭니다.', category: '프로그래밍', status: 'open', maxMembers: 5, currentMembers: 1, roles: ['프론트엔드'], requirements: ['HTML/CSS 기초', '열정'], tags: ['Vue', 'JavaScript'] },
    { id: '4', title: 'Spring Boot 백엔드 스터디', description: 'Spring Boot와 JPA를 이용한 API 서버 개발 스터디', category: '프로그래밍', status: 'open', maxMembers: 4, currentMembers: 3, roles: ['백엔드'], requirements: ['Java 기본 문법'], tags: ['Spring', 'Java', 'JPA'] },
    { id: '5', title: 'UX/UI 디자인 포트폴리오', description: 'Figma를 활용하여 함께 포트폴리오를 완성해봐요.', category: '디자인', status: 'open', maxMembers: 4, currentMembers: 1, roles: ['디자이너', '기획자'], requirements: ['Figma 사용 경험'], tags: ['Figma', 'UX/UI'] },
    { id: '6', title: 'iOS 앱 개발 입문', description: 'Swift를 사용하여 간단한 iOS 앱을 만들어보는 스터디입니다.', category: '프로그래밍', status: 'open', maxMembers: 4, currentMembers: 2, roles: ['iOS', '주니어'], requirements: ['기본적인 프로그래밍 지식'], tags: ['Swift', 'iOS'] },
    { id: '7', title: 'Node.js 딥다이브', description: 'Node.js의 이벤트 루프와 비동기 처리를 깊게 파고듭니다.', category: '프로그래밍', status: 'open', maxMembers: 6, currentMembers: 5, roles: ['백엔드'], requirements: ['JavaScript 중급 이상'], tags: ['Node.js', 'TypeScript'] },
    { id: '8', title: '토익 900점 목표 스터디', description: '매주 모의고사를 풀고 단어를 암기합니다.', category: '어학', status: 'open', maxMembers: 8, currentMembers: 3, roles: ['스터디원'], requirements: ['성실함', '토익 700점 이상'], tags: ['TOEIC', '영어'] },
    { id: '9', title: '정보처리기사 실기 준비', description: '2025년 정처기 실기 시험을 함께 준비합니다.', category: '자격증', status: 'open', maxMembers: 10, currentMembers: 9, roles: ['수험생'], requirements: ['필기 합격자'], tags: ['정보처리기사', '자격증'] },
    { id: '10', title: '실전 AWS 스터디', description: 'AWS의 주요 서비스를 직접 사용해보고 배포까지 경험합니다.', category: '프로그래밍', status: 'open', maxMembers: 5, currentMembers: 2, roles: ['데브옵스', '백엔드'], requirements: ['기본적인 서버 지식'], tags: ['AWS', 'Docker', 'EC2'] },
    { id: '11', title: 'Angular 마스터 클래스', description: 'Angular의 고급 기능과 RxJS를 학습합니다.', category: '프로그래밍', status: 'closed', maxMembers: 4, currentMembers: 4, roles: ['프론트엔드'], requirements: ['Angular 사용 경험'], tags: ['Angular', 'TypeScript', 'RxJS'] },
    { id: '12', title: 'Django 웹 개발', description: 'Python과 Django로 나만의 웹사이트를 만들어봅시다.', category: '프로그래밍', status: 'open', maxMembers: 6, currentMembers: 2, roles: ['백엔드', '풀스택'], requirements: ['Python 기초'], tags: ['Django', 'Python'] },
    { id: '13', title: '쿠버네티스 기초', description: '컨테이너 오케스트레이션의 표준, 쿠버네티스를 공부합니다.', category: '프로그래밍', status: 'open', maxMembers: 7, currentMembers: 6, roles: ['데브옵스'], requirements: ['Docker 사용 경험'], tags: ['Kubernetes', 'Docker'] },
    { id: '14', title: '실무 일본어 회화', description: '비즈니스 상황에서 사용하는 일본어 회화를 연습합니다.', category: '어학', status: 'closed', maxMembers: 5, currentMembers: 5, roles: ['스터디원'], requirements: ['JLPT N2 이상'], tags: ['일본어', '회화'] },
    { id: '15', title: '데이터 분석 with Python', description: 'Pandas, Numpy를 활용하여 데이터를 분석하고 시각화합니다.', category: '프로그래밍', status: 'open', maxMembers: 6, currentMembers: 3, roles: ['데이터 분석가'], requirements: ['Python 기본'], tags: ['Python', 'Pandas', 'Numpy'] },
    { id: '16', title: 'Android Jetpack Compose', description: '코틀린과 Jetpack Compose로 최신 안드로이드 UI를 개발합니다.', category: '프로그래밍', status: 'open', maxMembers: 4, currentMembers: 1, roles: ['Android'], requirements: ['코틀린 경험'], tags: ['Android', 'Kotlin', 'Compose'] },
    { id: '17', title: 'Svelte 스터디', description: '새롭게 떠오르는 프론트엔드 프레임워크, 스벨트를 배워봅니다.', category: '프로그래밍', status: 'open', maxMembers: 5, currentMembers: 4, roles: ['프론트엔드'], requirements: ['웹 개발 경험'], tags: ['Svelte', 'JavaScript'] },
    { id: '18', title: 'CS 전공면접 준비', description: '운영체제, 네트워크, 자료구조 등 CS 핵심 주제를 공부하고 모의면접을 진행합니다.', category: '취업', status: 'open', maxMembers: 6, currentMembers: 2, roles: ['취준생'], requirements: ['컴퓨터 공학 전공자'], tags: ['CS', '면접'] },
    { id: '19', title: 'Go 언어 프로젝트', description: 'Go를 사용하여 고성능 마이크로서비스를 개발합니다.', category: '프로그래밍', status: 'closed', maxMembers: 5, currentMembers: 5, roles: ['백엔드'], requirements: ['C 계열 언어 경험'], tags: ['Go', 'MSA'] },
    { id: '20', title: '공인중개사 2차 시험 대비', 'description': '핵심 요약집을 기반으로 암기 및 문제풀이를 진행합니다.', category: '자격증', status: 'open', maxMembers: 8, currentMembers: 7, roles: ['수험생'], requirements: ['1차 합격자 혹은 동차 준비생'], tags: ['공인중개사'] },
    { id: '21', title: 'Next.js로 블로그 만들기', description: 'Next.js의 SSR과 ISR을 활용하여 나만의 블로그를 만듭니다.', category: '프로그래밍', status: 'open', maxMembers: 4, currentMembers: 2, roles: ['프론트엔드'], requirements: ['React 경험'], tags: ['Next.js', 'React'] },
    { id: '22', title: '토익 스피킹 AL 목표', description: '템플릿 암기 및 실전 연습을 통해 토스 AL을 달성합시다.', category: '어학', status: 'open', maxMembers: 6, currentMembers: 1, roles: ['스터디원'], requirements: ['IM3 이상'], tags: ['토익스피킹', '영어'] },
    { id: '23', title: 'Figma 프로토타이핑', description: 'Figma의 인터랙티브 컴포넌트를 활용한 고급 프로토타이핑', category: '디자인', status: 'open', maxMembers: 5, currentMembers: 3, roles: ['디자이너'], requirements: ['Figma 기본 사용 가능'], tags: ['Figma', '프로토타이핑'] },
    { id: '24', title: 'Java 기초 문법 스터디', description: '객체지향 개념부터 차근차근, 비전공자도 환영합니다.', category: '프로그래밍', status: 'closed', maxMembers: 10, currentMembers: 10, roles: ['초보자'], requirements: ['열정만 있다면 OK'], tags: ['Java', '기초'] },
    { id: '25', title: 'GCP 자격증 스터디', description: 'Google Cloud Platform 자격증 취득을 목표로 합니다.', category: '자격증', status: 'open', maxMembers: 5, currentMembers: 4, roles: ['클라우드 엔지니어'], requirements: ['클라우드 경험 무관'], tags: ['GCP', '자격증'] },
    { id: '26', title: '프론트엔드 성능 최적화', description: 'Lighthouse 점수를 올리며 웹 성능을 개선하는 방법을 공부합니다.', category: '프로그래밍', status: 'open', maxMembers: 6, currentMembers: 5, roles: ['프론트엔드'], requirements: ['JavaScript 중급'], tags: ['Web Performance', 'React'] },
    { id: '27', title: '금융권 취업 준비', description: '금융 시사 스터디와 NCS, 논술을 함께 준비합니다.', category: '취업', status: 'open', maxMembers: 8, currentMembers: 2, roles: ['취준생'], requirements: ['상경계열 전공자 우대'], tags: ['금융', 'NCS'] },
    { id: '28', title: 'NestJS 백엔드 개발', description: 'TypeScript 기반의 NestJS로 확장성 있는 서버를 만듭니다.', category: '프로그래밍', status: 'open', maxMembers: 4, currentMembers: 3, roles: ['백엔드'], requirements: ['Node.js 경험', 'TypeScript'], tags: ['NestJS', 'TypeScript'] },
    { id: '29', title: 'ADsP 데이터 분석 준전문가', description: 'ADsP 자격증 시험을 단기간에 효율적으로 준비합니다.', category: '자격증', status: 'closed', maxMembers: 7, currentMembers: 7, roles: ['수험생'], requirements: ['데이터에 대한 관심'], tags: ['ADsP', '데이터 분석'] },
    { id: '30', title: 'SwiftUI로 만드는 WatchOS 앱', description: 'WatchOS 앱 개발에 도전하실 분들을 모집합니다.', category: '프로그래밍', status: 'open', maxMembers: 4, currentMembers: 1, roles: ['iOS', 'Apple Watch'], requirements: ['Swift 경험자'], tags: ['SwiftUI', 'WatchOS'] }
];

const StudyDetailPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [study, setStudy] = useState<StudyRoom | null | undefined>(undefined);
    const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);

    const [hasApplied, setHasApplied] = useState(false);

    useEffect(() => {
        const foundStudy = FAKE_STUDY_ROOMS.find(room => room.id === id);
        setStudy(foundStudy);
    }, [id]);

    const handleApplicationSubmit = (message: string) => {
        console.log(`--- 스터디 참가 신청 ---`);
        console.log(`스터디 ID: ${study?.id}`);
        console.log(`신청 메시지: ${message}`);
        console.log(`---------------------`);

        alert('참가 신청이 완료되었습니다.');
        setIsApplyModalOpen(false);
        setHasApplied(true);
    };

    if (study === undefined) {
        return <div>로딩 중...</div>;
    }

    if (!study) {
        return <div>스터디 정보를 찾을 수 없습니다.</div>;
    }

    return (
        <div className="page-container" style={{ maxWidth: '800px', margin: '40px auto' }}>
            <StudyDetailView
                room={study}
                onApplyClick={() => setIsApplyModalOpen(true)}
                hasApplied={hasApplied}
            />
            <Modal isOpen={isApplyModalOpen} onClose={() => setIsApplyModalOpen(false)}>
                <ApplicationForm
                    studyTitle={study.title}
                    onSubmit={handleApplicationSubmit}
                    onClose={() => setIsApplyModalOpen(false)}
                />
            </Modal>
        </div>
    );
};

export default StudyDetailPage;