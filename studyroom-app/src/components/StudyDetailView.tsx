import React from 'react';
import { StudyRoom } from '../types/study';
import Tag from './Tag';
import '../styles/StudyDetailView.css';

interface StudyDetailViewProps {
    room: StudyRoom;
    onApplyClick: () => void;
    hasApplied: boolean;
}

const StudyDetailView: React.FC<StudyDetailViewProps> = ({ room, onApplyClick, hasApplied }) => {
    const buttonText = hasApplied ? '신청완료' : '참가신청';
    const buttonClassName = hasApplied ? 'apply-btn applied' : 'apply-btn';

    return (
        <div className="study-detail-view">
            <header className="detail-header">
                <span className="detail-category">{room.category}</span>
                <h2 className="detail-title">{room.title}</h2>
                <div className="detail-meta">
                    <span><strong>멤버:</strong> {room.currentMembers} / {room.maxMembers}</span>
                    <span><strong>상태:</strong> {room.status === 'open' ? '모집 중' : '모집 완료'}</span>
                </div>
            </header>
            <section className="detail-section">
                <h3>스터디 설명</h3>
                <p>{room.description}</p>
            </section>
            <section className="detail-section">
                <h3>모집 직무</h3>
                <div className="detail-tag-list">
                    {room.roles.map(role => <Tag key={role} text={role} />)}
                </div>
            </section>
            <section className="detail-section">
                <h3>요구 조건</h3>
                <ul className="detail-requirements-list">
                    {room.requirements.map((req, index) => <li key={index}>{req}</li>)}
                </ul>
            </section>
            <section className="detail-section">
                <h3>기술 스택</h3>
                <div className="detail-tag-list">
                    {room.tags.map(tag => <Tag key={tag} text={tag} />)}
                </div>
            </section>
            <footer className="detail-footer">
                {room.status === 'open' && (
                    <button
                        className={buttonClassName}
                        onClick={onApplyClick}
                        disabled={hasApplied}
                        >
                        {buttonText}
                    </button>
                )}
            </footer>
        </div>
    );
};

export default StudyDetailView;