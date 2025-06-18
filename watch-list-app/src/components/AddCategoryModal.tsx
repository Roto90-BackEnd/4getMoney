import React, { FC, FormEvent } from 'react';
import './AddCategoryModal.css';

interface AddCategoryModalProps {
    isOpen: boolean;
    onClose: () => void;
    onAddCategory: (categoryName: string) => void;
}

const AddCategoryModal: FC<AddCategoryModalProps> = ({ isOpen, onClose, onAddCategory }) => {
    if (!isOpen) return null;

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const categoryNameInput = form.elements.namedItem('categoryName') as HTMLInputElement;

        if (categoryNameInput) {
            const categoryName = categoryNameInput.value;
            onAddCategory(categoryName);
            onClose();
        }
    };

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <div className="modal-header">
                    <h2 className="modal-title">카테고리 추가</h2>
                    <button className="modal-close-button" onClick={onClose}>&times;</button>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="modal-body">
                        <label htmlFor="categoryName" className="modal-label">카테고리 이름</label>
                        <input
                            type="text"
                            id="categoryName"
                            name="categoryName"
                            className="modal-input"
                            placeholder="새롭게 추가할 카테고리 이름을 입력하세요."
                            required
                        />
                    </div>
                    <div className="modal-footer">
                        <button type="submit" className="modal-add-button">카테고리 추가</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddCategoryModal;