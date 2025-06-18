import React from 'react';
import '../index.css';
import "../App.css";

const Firstbox = () => {
    return (
        <div className="bg-[#202638] py-10 rounded-s text-white w-[700px] w-7xl h-40">
            <div className="category-box">
                <div className="text-3xl font-semibold h-20 flex items-center mx-4">카테고리</div>

                <div className="flex gap-3 py-8">
                    <button className="text-xl text-white hover:underline">추가</button>
                    <button className="text-xl text-white hover:underline">수정</button>
                </div>
            </div>
            <div className="flex justify-center w-[700px] ">
                <select
                    className="w-[650px] bg-[#2F3750] text-white text-xl h-12 rounded-4xl focus:outline-none focus:ring-2 focus:ring-[#202637]"
                >
                    <option value="관심종목">관심종목</option>
                </select>
            </div>
        </div>
    );
};

export default Firstbox;
