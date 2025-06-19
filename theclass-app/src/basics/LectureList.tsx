import React from 'react';
import { Link } from 'react-router-dom';

type Lecture = {
    id: number;
    title: string;
    thumbnail: string;
};

const lectures: Lecture[] = [
    { id: 1, title: '재무제표 입문', thumbnail: 'http://localhost:3001/images/lecture1.jpg' },
    { id: 2, title: '기업가치 평가', thumbnail: 'http://localhost:3001/images/lecture2.jpg' },
    { id: 3, title: '주식 분석', thumbnail: 'http://localhost:3001/images/lecture3.jpg' },
    { id: 4, title: 'ETF 분석', thumbnail: 'http://localhost:3001/images/lecture4.jpg' }
];

const LectureList: React.FC = () => {
    return (
        <div
            style={{
                // backgroundColor: '#131722',  // 전체 배경색 지정
                color: '#fff',
                width: '80%',
                margin: '0 auto',
                padding: '2rem',
                boxSizing: 'border-box',
                minHeight: '100vh',
            }}
        >
            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: '1.5rem',
                }}
            >
                {lectures.map((lecture) => (
                    <Link
                        key={lecture.id}
                        to={`/theclass/lecture/${lecture.id}`}
                        style={{ textDecoration: 'none', color: 'inherit' }}
                    >
                        <div
                            style={{
                                borderRadius: '8px',
                                overflow: 'hidden',
                                backgroundColor: '#1a1f2e',
                                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.6)',
                                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                            }}
                            onMouseEnter={(e) => {
                                (e.currentTarget as HTMLDivElement).style.transform = 'scale(1.03)';
                                (e.currentTarget as HTMLDivElement).style.boxShadow = '0 12px 30px rgba(255, 255, 255, 0.15)';
                            }}
                            onMouseLeave={(e) => {
                                (e.currentTarget as HTMLDivElement).style.transform = 'scale(1)';
                                (e.currentTarget as HTMLDivElement).style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.6)';
                            }}
                        >
                            <img
                                src={lecture.thumbnail}
                                alt={lecture.title}
                                style={{ width: '100%', height: 'auto' }}
                            />
                            <div
                                style={{
                                    padding: '1rem',
                                    fontWeight: 'bold',
                                    fontSize: '1.5rem',
                                    textAlign: 'center',
                                }}
                            >
                                {lecture.title}
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default LectureList;
