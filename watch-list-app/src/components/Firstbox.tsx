import React, {useState, FC} from 'react';
import '../index.css';
import "../App.css";
import AddCategoryModal from './AddCategoryModal';
import EditCategoryModal from './EditCategoryModal';

const Firstbox: FC = () => {
    const [categories, setCategories] = useState<string[]>(['관심종목']);

    const [isAddModalOpen, setIsAddModalOpen] = useState<boolean>(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState<boolean>(false);

    const handleOpenAddModal = () => {
        setIsAddModalOpen(true);
    };
    const handleCloseAddModal = () => {
        setIsAddModalOpen(false);
    };

    const handleOpenEditModal = () => {
        setIsEditModalOpen(true);
    };
    const handleCloseEditModal = () => {
        setIsEditModalOpen(false);
    };

    const handleAddCategory = (categoryName: string) => {
        const trimmedCategoryName = categoryName.trim();
        if (trimmedCategoryName === '') {
            alert("카테고리 이름을 입력해주세요.");
            return;
        }

        if (!categories.includes(trimmedCategoryName)) {
            setCategories((prevCategories) => [...prevCategories, trimmedCategoryName]);
            console.log("새로운 카테고리 추가됨:", trimmedCategoryName);
        } else {
            console.log("이미 존재하는 카테고리입니다:", trimmedCategoryName);
            alert(`'${trimmedCategoryName}'은(는) 이미 존재하는 카테고리입니다.`);
        }
    };

    const handleUpdateCategory = (oldName: string, newName: string) => {
        const trimmedNewName = newName.trim();
        if (trimmedNewName === '') {
            alert("카테고리 이름을 입력해주세요.");
            return;
        }

        if (oldName !== trimmedNewName && categories.includes(trimmedNewName)) {
            alert(`'${trimmedNewName}'은(는) 이미 존재하는 카테고리입니다.`);
            return;
        }

        setCategories((prevCategories) =>
            prevCategories.map((category) =>
                category === oldName ? trimmedNewName : category
            )
        );
        console.log(`카테고리 "${oldName}"이(가) "${trimmedNewName}"으로 수정됨.`);
    };

    const handleDeleteCategory = (nameToDelete: string) => {
        if (window.confirm(`'${nameToDelete}' 카테고리를 삭제하시겠습니까?`)) {
            setCategories((prevCategories) =>
                prevCategories.filter((category) => category !== nameToDelete)
            );
            console.log(`카테고리 "${nameToDelete}" 삭제됨.`);
        }
    };

    const handleMoveCategory = (fromIndex: number, toIndex: number) => {
        setCategories((prevCategories) => {
            const newCategories = [...prevCategories];
            const [movedItem] = newCategories.splice(fromIndex, 1);
            newCategories.splice(toIndex, 0, movedItem);
            console.log(`카테고리 순서 변경: ${newCategories.join(', ')}`);
            return newCategories;
        });
    };

    return (
        <div className="bg-[#202638] py-1 rounded-s text-white w-[600px] h-40">
            <div className="category-box">
                <div className="text-2xl font-semibold h-20 flex items-center mx-2">카테고리</div>

                <div className="flex gap-3 py-8">
                    <button className="text-xl text-white hover:underline" onClick={handleOpenAddModal}>추가</button>
                    <button className="text-xl text-white hover:underline" onClick={handleOpenEditModal}>수정</button>
                </div>
            </div>
            <div className="flex justify-center w-[600px] ">
                <select
                    className="w-[550px] bg-[#2F3750] text-white text-xl h-10 rounded-4xl focus:outline-none focus:ring-2 focus:ring-[#202637]"
                >
                    {categories.map((category) => (
                        <option key={category} value={category}>
                            {category}
                        </option>
                    ))}
                </select>
            </div>

            <AddCategoryModal
                isOpen={isAddModalOpen}
                onClose={handleCloseAddModal}
                onAddCategory={handleAddCategory}
            />

            <EditCategoryModal
                isOpen={isEditModalOpen}
                onClose={handleCloseEditModal}
                categories={categories}
                onUpdateCategory={handleUpdateCategory}
                onDeleteCategory={handleDeleteCategory}
                onMoveCategory={handleMoveCategory}
            />
        </div>
    );
};

export default Firstbox;