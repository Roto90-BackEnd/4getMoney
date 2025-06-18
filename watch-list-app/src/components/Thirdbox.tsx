import React from 'react';
import '../index.css';

const Thirdbox =() => {
    return (
        <div className="bg-[#202638] text-white p-6 rounded-s w-[500px] h-200">
            <div className="category-box">
                <h2 className="text-3xl font-semibold mb-10 h-5 flex items-center">나만의 뉴스</h2>
            </div>
            <img src="http://localhost:3002/news.png" style={{ width: '480px', height: 'auto' }} />
        </div>
    );
}

export default Thirdbox