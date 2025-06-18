import React from 'react';

interface IntroTextProps {
    text: string;
}

const IntroText: React.FC<IntroTextProps> = ({ text }) => (
    <p style={{ marginTop: '2rem' }}>{text}</p>
);

export default IntroText;
