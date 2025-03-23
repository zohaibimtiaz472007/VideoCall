import React, { useEffect, useRef, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import './Room.css';

export default function Room() {
    const { roomId } = useParams();
    const navigate = useNavigate();
    const meetingRef = useRef(null);
    const [zegoInstance, setZegoInstance] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        if (!roomId) {
            alert('Invalid room ID');
            navigate('/');
            return;
        }
        const initializeMeeting = async () => {
            try {
                const appID = 67861282;
                const serverSecret = "8d4d58da8590a484f8f4db45a801f8cf";
                const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
                    appID,
                    serverSecret,
                    roomId,
                    Date.now().toString(),
                    "Your Name"
                );
                const zc = ZegoUIKitPrebuilt.create(kitToken);
                setZegoInstance(zc);

                zc.joinRoom({
                    container: meetingRef.current,
                    sharedLinks: [{
                        name: 'Copy Link',
                        url: `${window.location.origin}/room/${roomId}`
                    }],
                    scenario: {
                        mode: ZegoUIKitPrebuilt.OneONoneCall
                    },
                    showScreenSharingButton: true,
                    onLeaveRoom: () => {
                        navigate('/');
                    }
                });
            } catch (error) {
                console.error('Error initializing meeting:', error);
                alert('Failed to start meeting');
                navigate('/');
            } finally {
                setLoading(false);
            }
        };
        initializeMeeting();
        return () => {
            if (zegoInstance) {
                zegoInstance.destroy();
            }
        };
    }, [roomId, navigate]);

    return (
        <div className="room-container">
            {loading && <div className="loading-overlay">Initializing meeting...</div>}
            <div className="meeting-container" ref={meetingRef} />
        </div>
    );
}