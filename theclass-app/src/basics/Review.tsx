import React from 'react';

const Review: React.FC = () => {
    return (
        <div style={{ textAlign: 'center' }}>
            <img
                src="http://localhost:3001/images/review.jpg"
                alt="리뷰"
                style={{ maxWidth: '100%', borderRadius: '12px' }}
            />
        </div>
    );
};

export default Review;
