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
                    width: '100%',
                    height: '300px',
                    objectFit: 'cover',
                    borderRadius: '8px',
                    marginBottom: '1rem',
                }}
            />
        ))}
    </>
);

export default DetailImages;
