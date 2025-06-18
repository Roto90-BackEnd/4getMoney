import React, {FC, useState} from 'react';
import './EditCategoryModal.css';

interface EditCategoryModalProps {
    isOpen: boolean;
    onClose: () => void;
    categories: string[];
    onUpdateCategory: (oldName: string, newName: string) => void;
    onDeleteCategory: (nameToDelete: string) => void;
    onMoveCategory: (fromIndex: number, toIndex: number) => void;
}

const EditCategoryModal: FC<EditCategoryModalProps> = ({
                                                           isOpen,
                                                           onClose,
                                                           categories,
                                                           onUpdateCategory,
                                                           onDeleteCategory,
                                                           onMoveCategory,
                                                       }) => {
    if (!isOpen) return null;

    const [editingCategory, setEditingCategory] = useState<string | null>(null);
    const [newCategoryName, setNewCategoryName] = useState<string>('');

    const handleEditClick = (category: string) => {
        setEditingCategory(category);
        setNewCategoryName(category);
    };

    const handleSaveEdit = (oldName: string) => {
        const trimmedNewName = newCategoryName.trim();
        if (trimmedNewName === '') {
            alert('카테고리 이름을 입력해주세요.');
            return;
        }
        if (trimmedNewName !== oldName && categories.includes(trimmedNewName)) {
            alert(`'${trimmedNewName}'은(는) 이미 존재하는 카테고리입니다.`);
            return;
        }

        onUpdateCategory(oldName, trimmedNewName);
        setEditingCategory(null);
        setNewCategoryName('');
    };

    const handleCancelEdit = () => {
        setEditingCategory(null);
        setNewCategoryName('');
    };

    const handleMoveUp = (index: number) => {
        if (index > 0) {
            onMoveCategory(index, index - 1);
        }
    };

    const handleMoveDown = (index: number) => {
        if (index < categories.length - 1) {
            onMoveCategory(index, index + 1);
        }
    };

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <div className="modal-header">
                    <h2 className="modal-title">카테고리</h2>
                    <button className="modal-close-button" onClick={onClose}>&times;</button>
                </div>
                <div className="modal-body">
                    {categories.length === 0 ? (
                        <p className="no-categories-message">등록된 카테고리가 없습니다.</p>
                    ) : (
                        <ul className="category-list">
                            {categories.map((category, index) => (
                                <li key={category} className="category-item">
                                    {editingCategory === category ? (
                                        <div className="edit-input-wrapper">
                                            <input
                                                type="text"
                                                value={newCategoryName}
                                                onChange={(e) => setNewCategoryName(e.target.value)}
                                                onKeyDown={(e) => {
                                                    if (e.key === 'Enter') {
                                                        handleSaveEdit(category);
                                                    }
                                                    if (e.key === 'Escape') {
                                                        handleCancelEdit();
                                                    }
                                                }}
                                                className="category-edit-input"
                                            />
                                            <button onClick={() => handleSaveEdit(category)} className="save-button">✓
                                            </button>
                                            <button onClick={handleCancelEdit} className="cancel-button">✕</button>
                                        </div>
                                    ) : (
                                        <>
                                            <span className="category-name">{category}</span>
                                            <div className="category-actions">
                                                <button className="action-button"
                                                        onClick={() => handleEditClick(category)}>
                                                    ✏️
                                                </button>
                                                <button className="action-button"
                                                        onClick={() => onDeleteCategory(category)}>
                                                    ✕
                                                </button>
                                                <button className="action-button" onClick={() => handleMoveUp(index)}
                                                        disabled={index === 0}>
                                                    ▲
                                                </button>
                                                <button className="action-button" onClick={() => handleMoveDown(index)}
                                                        disabled={index === categories.length - 1}>
                                                    ▼
                                                </button>
                                            </div>
                                        </>
                                    )}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
};

export default EditCategoryModal;