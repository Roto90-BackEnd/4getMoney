import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const DEADLINE = new Date('2025-06-19T23:59:59'); // 할인 마감일

const LectureDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [activeTab, setActiveTab] = useState<'intro' | 'curriculum' | 'review'>('intro');
    const [timeLeft, setTimeLeft] = useState('');

    const lectures = {
        '1': {
            title: '재무제표 입문',
            thumbnail: "http://localhost:3001/images/lecture1.jpg",
            intro: '이 강의는 재무제표를 처음 접하는 분들을 위한 입문 강의입니다.',
            curriculum: '1. 재무제표 개요\n2. 손익계산서\n3. 재무상태표\n4. 현금흐름표',
            reviews: [
                '정말 기초부터 잘 알려주셔서 좋았어요.',
                '재무제표를 읽을 수 있게 되었습니다!',
            ],
        },
        '2': {
            title: '기업가치 평가',
            thumbnail: "http://localhost:3001/images/lecture2.jpg",
            intro: '기업가치 평가 방법과 사례 분석.',
            curriculum: '1. 기업가치 평가 방법\n2. 기업가치 평가 사례\n3. 기업 분석',
            reviews: [
                '기업의 가치를 잘 평가하여 투자하는 데 도움이 되었어요!',
            ],
        },
        '3': {
            title: '주식 분석',
            thumbnail: "http://localhost:3001/images/lecture3.jpg",
            intro: '주식시장 및 개별 종목 분석 기법',
            curriculum: '1. 개별 종목 선정\n2. 개별 종목 분석\n3. 수익률 300% 분석 기법 제공',
            reviews: [
                '이 강의를 통해 많은 돈을 벌었어요! 강추강추~',
            ],
        },
        '4': {
            title: 'ETF 분석',
            thumbnail: "http://localhost:3001/images/lecture4.jpg",
            intro: 'ETF 투자 전략과 포트폴리오 구성',
            curriculum: '1. ETF란 무엇인가?\n2. 연금 투자방법\n3. 연금계좌 포트폴리오 구성',
            reviews: [
                '이 강의대로 투자해서 연금으로 늙어 죽을때까지 패시브인컴을 만들거에요!',
            ],
        },
    };
    const detailImages = Array.from({ length: 12 }, (_, i) => `http://localhost:3001/images/detailpage${i + 1}.jpg`);


    // ⛳️ 강의 id에 맞는 객체 추출
    const lecture = lectures[id ?? ''];
    if (!lecture) {
        return <div style={{ padding: '2rem' }}>해당 강의를 찾을 수 없습니다.</div>;
    }

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

        const timer = setInterval(updateCountdown, 1000);
        updateCountdown();

        return () => clearInterval(timer);
    }, []);

    return (
        <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
            <img
                src={lecture.thumbnail}
                alt={lecture.title}
                style={{ width: '100%', borderRadius: '12px', marginBottom: '1rem' }}
            />
            <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>{lecture.title}</h2>

            {/* 탭 버튼 */}
            <div style={{
                display: 'flex',
                marginBottom: '1.5rem',
                borderRadius: '8px',
                overflow: 'hidden',
                boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
            }}>
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
                    <div>
                        <div
                            style={{
                                padding: '1rem',
                                backgroundColor: '#ffe8e8',
                                border: '1px solid #ffaaaa',
                                borderRadius: '8px',
                                color: '#b30000',
                                fontWeight: 'bold',
                                marginBottom: '1.5rem',
                                textAlign: 'center',
                            }}
                        >
                            🎉 지금 수강신청 시 <strong>할인 혜택</strong> 제공!
                            <br />
                            <span style={{ fontSize: '1.2rem' }}>
                                할인 마감까지: {timeLeft}
                            </span>
                        </div>
                        {/* 💰 할인 가격표 추가 */}
                        <div
                            style={{
                                border: '1px dashed #ccc',
                                padding: '1rem',
                                borderRadius: '8px',
                                marginBottom: '1.5rem',
                                backgroundColor: '#fdfdfd',
                                fontSize: '1rem',
                                lineHeight: '1.6',
                            }}
                        >
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                                <span>정가</span>
                                <span style={{ textDecoration: 'line-through', color: '#999' }}>240,000원</span>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontWeight: 'bold', color: '#d60000' }}>
                                <span>이벤트 가격</span>
                                <span>50% &nbsp;&nbsp; 120,000원</span>
                            </div>
                            <hr style={{ border: 'none', borderTop: '1px solid #ddd', margin: '1rem 0' }} />
                            <div style={{ textAlign: 'right', color: '#444' }}>
                                12개월 나눠서 결제하면&nbsp;
                                <strong style={{ fontSize: '1.05rem', color: 'blue' }}>월 10,000원</strong>
                            </div>
                        </div>
                        <div style={{ marginTop: '2rem' }}>
                            {detailImages.map((src, idx) => (
                                <img
                                    key={idx}
                                    src={src}
                                    alt={`상세 이미지 ${idx + 1}`}
                                    style={{ width: '100%', marginBottom: '1rem', borderRadius: '8px' }}
                                />
                            ))}
                            <p>{lecture.intro}</p>
                        </div>
                    </div>
                )}

                {activeTab === 'curriculum' && (
                    <pre style={{ whiteSpace: 'pre-wrap' }}>{lecture.curriculum}</pre>
                )}
                {activeTab === 'review' && (
                    <ul>
                        {lecture.reviews.map((review, idx) => (
                            <li key={idx} style={{ marginBottom: '0.5rem' }}>
                                {review}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default LectureDetail;
