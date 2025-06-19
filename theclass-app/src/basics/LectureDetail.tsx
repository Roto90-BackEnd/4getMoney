import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Curriculum from './Curriculum';
import Review from './Review';
import IntroTab from './IntroTab';
import PurchaseBox from "./PurchaseBox.tsx";

const DEADLINE = new Date('2025-06-19T23:59:59');

const videoMap: Record<string, string> = {
    '1': 'HGgwyFcslwk',
    '2': 'P23wNAwvxUo',
    '3': '7VDvW1zCZ8c',
    '4': 'YI-dTqs6PGQ',
};

const dropdownContents = [
    { title: '1. 투자가 필요한 이유', content: '왜 우리는 투자를 해야 하는가에 대한 설명입니다.' },
    { title: '2. 투자의 방식', content: '다양한 투자 방식에 대한 소개입니다.' },
    { title: '3. 기업', content: '기업 분석과 가치평가에 대한 개요입니다.' },
    { title: '4. ETF', content: 'ETF의 종류와 투자전략에 대한 내용입니다.' },
    { title: '5. 주식&주식시장 고르기', content: '올바른 주식 선택법과 시장 이해 방법입니다.' },
    { title: '6. 금리', content: '금리와 투자 수익률의 관계에 대한 설명입니다.' },
    { title: '7. ETF와 금융정보 받기', content: 'ETF 관련 정보를 어디서 받는지에 대한 안내입니다.' },
    { title: '8. ETF 세계로의 초대', content: 'ETF를 활용한 글로벌 분산투자 전략입니다.' },
    { title: '9. 자산배분', content: '포트폴리오 구성과 리스크 분산 전략입니다.' },
];

const lectures = {
    '1': {
        title: '재무제표 입문',
        thumbnail: "http://localhost:3001/images/lecture1.jpg",
        curriculum: '1. 재무제표 개요\n2. 손익계산서\n3. 재무상태표\n4. 현금흐름표',
        reviews: [
            '정말 기초부터 잘 알려주셔서 좋았어요.',
            '재무제표를 읽을 수 있게 되었습니다!',
        ],
    },
    '2': {
        title: '기업가치 평가',
        thumbnail: "http://localhost:3001/images/lecture2.jpg",
        curriculum: '1. 기업가치 평가 방법\n2. 기업가치 평가 사례\n3. 기업 분석',
        reviews: [
            '기업의 가치를 잘 평가하여 투자하는 데 도움이 되었어요!',
        ],
    },
    '3': {
        title: '주식 분석',
        thumbnail: "http://localhost:3001/images/lecture3.jpg",
        curriculum: '1. 개별 종목 선정\n2. 개별 종목 분석\n3. 수익률 300% 분석 기법 제공',
        reviews: [
            '이 강의를 통해 많은 돈을 벌었어요! 강추강추~',
        ],
    },
    '4': {
        title: 'ETF 분석',
        thumbnail: "http://localhost:3001/images/lecture4.jpg",
        curriculum: '1. ETF란 무엇인가?\n2. 연금 투자방법\n3. 연금계좌 포트폴리오 구성',
        reviews: [
            '이 강의대로 투자해서 연금으로 늙어 죽을때까지 패시브인컴을 만들거에요!',
        ],
    },
};

const LectureDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [activeTab, setActiveTab] = useState<'intro' | 'curriculum' | 'review'>('intro');
    const [timeLeft, setTimeLeft] = useState('');
    const lecture = lectures[id ?? ''];
    const videoId = videoMap[id ?? '1'];
    const detailImages = Array.from({ length: 12 }, (_, i) => `http://localhost:3001/images/detailpage${i + 1}.jpg`);

    useEffect(() => {
        const updateCountdown = () => {
            const now = new Date().getTime();
            const distance = DEADLINE.getTime() - now;

            if (distance < 0) {
                setTimeLeft('이벤트 종료');
                return;
            }

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
            const minutes = Math.floor((distance / (1000 * 60)) % 60);
            const seconds = Math.floor((distance / 1000) % 60);

            setTimeLeft(`${days}일 ${hours}시간 ${minutes}분 ${seconds}초`);
        };

        updateCountdown();
        const timer = setInterval(updateCountdown, 1000);

        return () => clearInterval(timer);
    }, []);

    if (!lecture) {
        return <div style={{ padding: '2rem' }}>해당 강의를 찾을 수 없습니다.</div>;
    }

    return (
        <div
            style={{
                // backgroundColor: '#131722',
                color: '#fff',
                padding: '2rem',
                maxWidth: '800px',
                margin: '0 auto',
                minHeight: '100vh',
            }}
        >
            <img
                src={lecture.thumbnail}
                alt={lecture.title}
                style={{ width: '100%', borderRadius: '12px', marginBottom: '1rem' }}
            />
            <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>{lecture.title}</h2>

            {/* 탭 버튼 */}
            <div
                style={{
                    display: 'flex',
                    marginBottom: '1.5rem',
                    borderRadius: '8px',
                    overflow: 'hidden',
                    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
                }}
            >
                {['intro', 'curriculum', 'review'].map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab as 'intro' | 'curriculum' | 'review')}
                        style={{
                            flex: 1,
                            padding: '0.75rem',
                            backgroundColor: activeTab === tab ? '#007BFF' : '#f8f8f8',
                            color: activeTab === tab ? '#fff' : '#333',
                            border: 'none',
                            borderRight: tab !== 'review' ? '1px solid #ddd' : 'none',
                            fontWeight: activeTab === tab ? 'bold' : 'normal',
                            cursor: 'pointer',
                        }}
                    >
                        {{
                            intro: '클래스 소개',
                            curriculum: '커리큘럼',
                            review: '리뷰',
                        }[tab]}
                    </button>
                ))}
            </div>

            {/* 탭 내용 */}
            <div style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
                {activeTab === 'intro' && (
                    <IntroTab
                        detailImages={detailImages}
                        dropdownContents={dropdownContents}
                        videoId={videoId}
                        introText={lecture.intro}
                        timeLeft={timeLeft}
                    />
                )}
                {activeTab === 'curriculum' && <Curriculum />}
                {activeTab === 'review' && <Review />}
            </div>

            {/* 고정 구매 박스 */}
            <PurchaseBox
                timeLeft={timeLeft}
                price="50% 할인 120,000원"
                onBuy={() => alert('구매 페이지로 이동합니다.!')}
            />


        </div>
    );
};

export default LectureDetail;
