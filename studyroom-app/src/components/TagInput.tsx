import React from 'react';
import '../styles/TagInput.css';

interface TagInputProps {
    label: string;
    availableTags: string[];
    selectedTags: string[];
    onTagsChange: (newTags: string[]) => void;
}

const TagInput: React.FC<TagInputProps> = ({ label, availableTags, selectedTags, onTagsChange }) => {
 const handleTagClick = (tag: string) => {
     const newTags = selectedTags.includes(tag)
        ? selectedTags.filter(t => t !== tag)
         : [...selectedTags, tag];
        onTagsChange(newTags);
};
    return (
        <div className="tag-input-group">
            <label>{label}</label>
            <div className="selected-tags-container">
                {selectedTags.length > 0 ? (
                    selectedTags.map(tag => (
                        <span key={tag} className="tag-item selected" onClick={() => handleTagClick(tag)}>
                            {tag}
                            <span className="remove-tag-icon">&times;</span>
                        </span>
                    ))
                ) : (
                    <span className="placeholder-text">아래 태그를 선택해주세요.</span>
                )}
            </div>

            <div className="available-tags-container">
                {availableTags.map(tag => (
                    <span
                        key={tag}
                        className={`tag-item available ${selectedTags.includes(tag) ? 'active' : ''}`}
                        onClick={() => handleTagClick(tag)}
                    >
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default TagInput;