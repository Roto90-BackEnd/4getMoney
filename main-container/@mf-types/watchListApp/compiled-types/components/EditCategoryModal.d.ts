import { FC } from 'react';
import './EditCategoryModal.css';
interface EditCategoryModalProps {
    isOpen: boolean;
    onClose: () => void;
    categories: string[];
    onUpdateCategory: (oldName: string, newName: string) => void;
    onDeleteCategory: (nameToDelete: string) => void;
    onMoveCategory: (fromIndex: number, toIndex: number) => void;
}
declare const EditCategoryModal: FC<EditCategoryModalProps>;
export default EditCategoryModal;
