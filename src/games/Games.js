import React from 'react';
import '../games/games.css';
const Games = () => {
    return (
        <div>
            <div className='board x' id='board'>
                <div className='cell x' data-cell></div>
                <div className='cell circle' data-cell></div>
                <div className='cell' data-cell></div>
                <div className='cell' data-cell></div>
                <div className='cell' data-cell></div>
                <div className='cell' data-cell></div>
                <div className='cell' data-cell></div>
                <div className='cell' data-cell></div>
                <div className='cell' data-cell></div>
            </div>
            <div className='winning-message' id='winningMessage'>
                <div data-winning-message-text></div>
                <button id='restartButton'>Restart</button>
            </div>
        </div>
    );
};

export default Games;