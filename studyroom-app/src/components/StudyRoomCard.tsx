import React from 'react';
import { Link } from 'react-router-dom';
import { StudyRoom } from '../types/study';
import Tag from './Tag';
import '../styles/StudyRoomCard.css';

interface StudyRoomCardProps {
    room: StudyRoom;
}

const StudyRoomCard: React.FC<StudyRoomCardProps> = ({ room }) => {
    const isClosed = room.status === 'closed';

    return (
        <Link to={`/study/${room.id}`} className={`card-link ${isClosed ? 'disabled' : ''}`}>
            <div className="card">
                <div className="card-header">
                    <span>{room.category}</span>
                    <span className="member-count">
                        {room.currentMembers} / {room.maxMembers}
                    </span>
                </div>
                <div className="card-body">
                    <h3 className="title">{room.title}</h3>
                    <div className="info-group">
                        <span><strong>모집 역할: </strong>{room.roles.join(', ')}</span>
                        <span><strong>요구 조건: </strong>{room.requirements.join(', ')}</span>
                    </div>
                </div>
                <div className="card-footer">
                    <div>
                        {room.tags.map((tag) => <Tag key={tag} text={tag} />)}
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default StudyRoomCard;