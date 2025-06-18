import React from 'react';
import { IoClose } from 'react-icons/io5';
import { IoSearch } from 'react-icons/io5';

interface SearchModalProps {
    onClose: () => void; // onClose는 아무것도 반환하지 않는 함수입니다.
}

const SearchModal: React.FC<SearchModalProps> = ({ onClose }) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
            <div className="bg-[#202638] text-white rounded-lg p-4 w-11/12 md:w-1/2 lg:w-1/3 max-h-[90vh] flex flex-col">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold">카테고리 자산 추가</h2>
                    <button onClick={onClose} className="text-gray-400 hover:text-white">
                        <IoClose size={24} />
                    </button>
                </div>
                <div className="relative mb-4">
                    <IoSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                    <input
                        type="text"
                        placeholder="주식, 가상자산 검색"
                        className="w-full bg-[#1A1F2E] text-white rounded-md py-2 pl-10 pr-4 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                </div>
                <div className="flex-grow overflow-y-auto">
                    <p className="text-gray-400 text-center mt-8">검색 결과가 없습니다.</p>
                </div>
            </div>
        </div>
    );
};

export default SearchModal;