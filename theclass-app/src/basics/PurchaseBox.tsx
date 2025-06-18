import React from 'react';

interface PurchaseBoxProps {
    timeLeft: string;
    price: string;
    onBuy: () => void;
}

const PurchaseBox: React.FC<PurchaseBoxProps> = ({ timeLeft, price, onBuy }) => {
    return (
        <div
            style={{
                position: 'fixed',
                bottom: 0,
                left: 0,
                width: '100%',
                backgroundColor: '#131722',
                color: '#fff',
                padding: '1rem 2rem',
                boxShadow: '0 -2px 8px rgba(0,0,0,0.3)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                zIndex: 1000,
            }}
        >
            <div>
                <div>이벤트 종료까지: {timeLeft}</div>
                <div style={{ fontWeight: 'bold', fontSize: '1.2rem', color: "red"}}>{price}</div>
            </div>
            <button
                onClick={onBuy}
                style={{
                    backgroundColor: '#007BFF',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '6px',
                    padding: '0.75rem 1.5rem',
                    cursor: 'pointer',
                    fontSize: '1rem',
                }}
            >
                구매하기
            </button>
        </div>
    );
};

export default PurchaseBox;
