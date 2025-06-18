import React, { useState } from 'react';
import Dropdown from './Dropdown';

interface DropdownContent {
    title: string;
    content: string;
}

interface DropdownListProps {
    contents: DropdownContent[];
}

const DropdownList: React.FC<DropdownListProps> = ({ contents }) => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleDropdown = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div>
            {contents.map((item, index) => (
                <Dropdown
                    key={index}
                    index={index}
                    title={item.title}
                    content={item.content}
                    isOpen={openIndex === index}
                    toggle={toggleDropdown}
                />
            ))}
        </div>
    );
};

export default DropdownList;