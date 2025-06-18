import React from 'react';

interface DetailImagesProps {
    images: string[];
}

const DetailImages: React.FC<DetailImagesProps> = ({ images }) => (
    <>
        {images.map((src, idx) => (
            <img
                key={idx}
                src={src}
                alt={`상세 이미지 ${idx + 1}`}
                style={{
                    width: '100%',   // 부모 요소 너비에 맞게 꽉 채우기
                    height: 'auto',  // 비율 유지하며 높이 자동 조절
                    display: 'block',
                    marginBottom: '1rem',
                    borderRadius: '8px',
                }}
            />
        ))}
    </>
);

export default DetailImages;
