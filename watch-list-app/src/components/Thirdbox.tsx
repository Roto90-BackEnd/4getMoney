import React from 'react';
import '../index.css';

const Thirdbox =() => {
    return (
        <div className="bg-[#202638] text-white p-6 rounded-s w-full max-w-2xl h-90">
            <div className="category-box">
                <h2 className="text-3xl font-semibold mb-10 h-30 flex items-center">나만의 뉴스</h2>
            </div>
            <div className="flex justify-center items-center h-24 text-xl text-gray-400">
                관련 뉴스가 없습니다.
            </div>
        </div>
    );
}

export default Thirdbox