import React, {useState} from 'react';
import { Routes, Route } from 'react-router-dom';
import StudyListPage from './pages/StudyListPage';
import StudyDetailView from './pages/StudyDetailPage.tsx';
import Modal from './components/Modal'
import CreateStudyForm from "./components/CreateStudyForm";
import './styles/App.css';

function App() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false)

    return (
        <div className="app-container">
            <header className="app-header">
                <h1 className="app-title">모의면접 스터디 찾기</h1>
                {/*<button className="create-study-btn" onClick={openModal}>*/}
                {/*    스터디 생성*/}
                {/*</button>*/}
            </header>
            <main>
                <Routes>
                    <Route path="/" element={<StudyListPage />} />
                    <Route path="/study/:id" element={<StudyDetailView />} />
                </Routes>
            </main>

            {/* 모달 컴포넌트 렌더링 */}
            {/*<Modal isOpen={isModalOpen} onClose={closeModal}>*/}
            {/*    <CreateStudyForm />*/}
            {/*</Modal>*/}
        </div>
    );
}

export default App;