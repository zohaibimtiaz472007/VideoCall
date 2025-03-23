import React, { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

export default function Home() {
  const [roomId, setRoomId] = useState('');
  const navigate = useNavigate();

  const handleJoinRoom = useCallback(() => {
    if (!roomId.trim()) {
      alert('Please enter a valid room ID');
      return;
    }
    navigate(`/room/${roomId}`);
  }, [roomId, navigate]);

  return (
    <div className="home-container">
      <div className="form-wrapper">
        <div className="header">
          <img
            className="video-icon"
            src="https://cdn-icons-png.flaticon.com/128/11104/11104179.png"
            alt="video call"
          />
          <h1 className="title">Secure Video Meeting</h1>
          <p className="subtitle">Enter your room ID to join or create a meeting</p>
        </div>

        <div className="input-group">
          <input
            type="text"
            value={roomId}
            onChange={(e) => setRoomId(e.target.value)}
            className="room-input"
            placeholder="Enter Room ID"
            onKeyPress={(e) => e.key === 'Enter' && handleJoinRoom()}
          />
        </div>

        <button
          type="button"
          onClick={handleJoinRoom}
          className="join-button"
        >
          Join Now
        </button>
      </div>
    </div>
  );
}