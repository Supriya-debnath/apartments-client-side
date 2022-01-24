import React from 'react';
import './SecondBanner.css';

const SecondBanner = () => {
    return (
        <div className="Sbanner-img">
        <div className="Sbanner-text">
            <h1>The Pleasant Surroundings of Nature <br /> Will Impress You</h1>
            <p>
            Sleek and sophisticated, Costix offers qualities always coveted, but rarely obtained in the finest New York rental residences a  <br /> blend of generously proportioned interiors and the enjoyment of Nassau.
            </p>
            <a className='video' href='https://youtu.be/juiDYO5vqJY'>
            <i class="fas fa-play-circle fa-3x"></i>
            </a>
        </div>
    </div>
    );
};

export default SecondBanner;