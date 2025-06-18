import { FC } from 'react';
import './AddCategoryModal.css';
interface AddCategoryModalProps {
    isOpen: boolean;
    onClose: () => void;
    onAddCategory: (categoryName: string) => void;
}
declare const AddCategoryModal: FC<AddCategoryModalProps>;
export default AddCategoryModal;
