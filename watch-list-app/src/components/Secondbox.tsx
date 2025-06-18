import React, { useState } from 'react';
import '../index.css';
import SearchModal from './SearchModal';

// Secondbox 컴포넌트에는 특별한 props가 없으므로 별도의 interface는 필요 없습니다.
const Secondbox: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false); // useState에 boolean 타입을 명시합니다.

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="bg-[#202638] text-white p-0.5 rounded-s h-80">
            <div className="category-box">
                <div>
                    <h2 className="text-2xl h-20 flex items-center font-semibold mx-2">관심종목</h2>
                    <p className="text-xl text-gray-400 h-10 mt-1 mx-2">2개</p>
                </div>
                <div className="flex flex-col items-end gap-2">
                    <button
                        className="text-xl text-white h-20 flex items-center hover:underline"
                        onClick={openModal}
                    >
                        추가
                    </button>
                    <select className="flex items-center text-sm text-gray-400 cursor-pointer">
                        <option value="이름순">이름순</option>
                        <option value="배당순">배당순</option>
                        <option value="가격순">가격순</option>
                        <div className="w-4 h-4 ml-1"/>
                    </select>
                </div>
            </div>

            <div className="image-container">
                <img src="http://localhost:3002/samsung.png" style={{ width: '580px', height: 'auto' }} />
                <img src="http://localhost:3002/bitcoin.png" style={{ width: '580px', height: 'auto' }} />
            </div>

            {isModalOpen && <SearchModal onClose={closeModal} />}
        </div>
    );
};

export default Secondbox;