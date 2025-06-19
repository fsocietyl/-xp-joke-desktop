import React, { useEffect, useRef } from 'react';
import './JumpScare.css';

export default function JumpScare({ onExit }) {
  const videoRef = useRef();
  const containerRef = useRef();

  useEffect(() => {
    // Request fullscreen
    const el = containerRef.current;
    if (el.requestFullscreen) el.requestFullscreen();
    else if (el.webkitRequestFullscreen) el.webkitRequestFullscreen();
    else if (el.mozRequestFullScreen) el.mozRequestFullScreen();
    else if (el.msRequestFullscreen) el.msRequestFullscreen();

    // Play video
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.volume = 1;
      videoRef.current.play();
    }

    // ESC to exit
    const onKey = e => {
      if (e.key === 'Escape') handleExit();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
    // eslint-disable-next-line
  }, []);

  function handleExit() {
    if (document.fullscreenElement) document.exitFullscreen();
    if (videoRef.current) videoRef.current.pause();
    onExit();
  }

  return (
    <div className="jumpscare-container" ref={containerRef}>
      <button className="jumpscare-close" onClick={handleExit} aria-label="Close">×</button>
      <video
        ref={videoRef}
        className="jumpscare-video"
        src="/video/jumpscare.mp4"
        autoPlay
        loop
        playsInline
        preload="auto"
        style={{ width: '100vw', height: '100vh', objectFit: 'cover' }}
      />
      <div className="jumpscare-gotcha">GOTCHA!</div>
    </div>
  );
} 