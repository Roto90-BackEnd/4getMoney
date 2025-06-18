import React from 'react';

interface CountdownBannerProps {
    timeLeft: string;
    price: string;
}

const CountdownBanner: React.FC<CountdownBannerProps> = ({ timeLeft }) => (
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
        <span style={{ fontSize: '1.2rem' }}>할인 마감까지: {timeLeft}</span>
    </div>
);

export default CountdownBanner;
