import React from 'react';
import './XpDesktop.css';

const icons = [
  { name: 'My Computer', img: '/icons/my-computer.png' },
  { name: 'My Documents', img: '/icons/my-documents.png' },
  { name: 'Recycle Bin', img: '/icons/recycle-bin.png' },
  { name: 'Network Places', img: '/icons/network.png' },
];

function playXpClick() {
  const audio = new Audio('/sounds/xp-click.mp3');
  audio.volume = 0.5;
  audio.play();
}

export default function XpDesktop({ onPressHere }) {
  return (
    <div className="xp-desktop">
      <div className="xp-icons">
        {icons.map(icon => (
          <div
            className="xp-icon"
            key={icon.name}
            tabIndex={0}
            onMouseEnter={playXpClick}
          >
            <img src={icon.img} alt={icon.name} />
            <span>{icon.name}</span>
          </div>
        ))}
      </div>
      <div className="xp-press-here" onClick={onPressHere} tabIndex={0} onMouseEnter={playXpClick}>
        <img src="/icons/file-big.png" alt="Press Here" />
        <span>Press Here</span>
      </div>
      <div className="xp-taskbar">
        <button className="xp-start">
          <img src="/icons/start.png" alt="Start" />
          <span>Start</span>
        </button>
        <div className="xp-taskbar-rest" />
        <div className="xp-clock">12:34 PM</div>
      </div>
    </div>
  );
} 