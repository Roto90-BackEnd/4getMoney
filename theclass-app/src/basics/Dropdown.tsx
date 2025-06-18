import React from 'react';

interface DropdownProps {
    index: number;
    title: string;
    content: string;
    isOpen: boolean;
    toggle: (index: number) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ index, title, content, isOpen, toggle }) => {
    return (
        <div
            style={{
                border: '1px solid #ccc',
                borderRadius: '8px',
                marginBottom: '0.5rem',
                backgroundColor: '#1e2533',
                color: '#fff',
                padding: '0.75rem',
                cursor: 'pointer',
            }}
            onClick={() => toggle(index)}
        >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span>{title}</span>
                <span>{isOpen ? '🔼' : '🔽'}</span>
            </div>
            {isOpen && (
                <div style={{ marginTop: '0.5rem', color: '#ddd', fontSize: '0.95rem' }}>
                    {content}
                </div>
            )}
        </div>
    );
};

export default Dropdown;