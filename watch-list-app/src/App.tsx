import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import FavoriteItemCategories from './pages/FavoriteItemCategories';

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="my/favorite-item-categories" />} />
            <Route path="my/favorite-item-categories" element={<FavoriteItemCategories />} />
        </Routes>
    );
};

export default App;

