import React from 'react';
import { Routes, Route } from 'react-router-dom';  // BrowserRouter는 빼고

import LectureList from './basics/LectureList';
import LectureDetail from './basics/LectureDetail.tsx';

function App() {
    return (
        <Routes>
            <Route path="/" element={<LectureList />} />
            <Route path="/lecture/:id" element={<LectureDetail />} />
        </Routes>
    );
}

export default App;