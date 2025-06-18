import React from 'react';
import '../index.css';

const Secondbox = () => {
    return (
        <div className="bg-[#202638] text-white p-6 rounded-s w-full max-w-4xl h-80">
            <div className="category-box">
                <div>
                    <h2 className="text-3xl h-30 flex items-center font-semibold">관심종목</h2>
                    <p className="text-xl text-gray-400 h-10 mt-1">0개</p>
                </div>
                <div className="flex flex-col items-end gap-2">
                    <button className="text-xl text-white h-30 flex items-center hover:underline">추가</button>
                    <select className="flex items-center text-xl text-gray-400 cursor-pointer">
                        <option value="이름순">이름순</option>
                        <option value="배당순">배당순</option>
                        <option value="가격순">가격순</option>
                        <div className="w-4 h-4 ml-1" />
                    </select>
                </div>
            </div>

            <div className="flex justify-center items-center h-32 text-xl text-gray-400">
                관심종목이 비어 있어요.
            </div>
        </div>
    );
};

export default Secondbox;
