import React from 'react';
import { Routes, Route } from 'react-router-dom';  // BrowserRouter는 빼고

import LectureList from './basics/LectureList';
import LectureDetail from './basics/LectureDetail.tsx';

function App() {
    return (
        <div style={{ color: 'white', minHeight: '100vh', padding: '2rem' }}>
            <Routes>
                <Route path="/" element={<LectureList />} />
                <Route path="/lecture/:id" element={<LectureDetail />} />
            </Routes>
        </div>
    );
}

export default App;