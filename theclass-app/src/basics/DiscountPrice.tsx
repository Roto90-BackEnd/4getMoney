// DiscountPrice.tsx
import React from 'react';

const DiscountPrice: React.FC = () => {
    return (
        <div
            style={{
                border: '1px dashed #ccc',
                padding: '1rem',
                borderRadius: '8px',
                marginBottom: '1.5rem',
                backgroundColor: '#fdfdfd',
                fontSize: '1rem',
                lineHeight: '1.6',
                color: '#000',
            }}
        >
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <span>정가</span>
                <span style={{ textDecoration: 'line-through', color: '#999' }}>240,000원</span>
            </div>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginBottom: '0.5rem',
                    fontWeight: 'bold',
                    color: '#d60000',
                }}
            >
                <span>이벤트 가격</span>
                <span>50% &nbsp;&nbsp; 120,000원</span>
            </div>
            <hr style={{ border: 'none', borderTop: '1px solid #ddd', margin: '1rem 0' }} />
            <div style={{ textAlign: 'right', color: '#444' }}>
                12개월 나눠서 결제하면&nbsp;
                <strong style={{ fontSize: '1.05rem', color: '#333' }}>월 10,000원</strong>
            </div>
        </div>
    );
};

export default DiscountPrice;
