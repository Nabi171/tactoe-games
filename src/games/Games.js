import React from 'react';
import '../games/games.css';
const Games = () => {
    const X_CLASS = 'x'
    const CIRCLE_CLASS = 'circle'
    const cellElelments = document.querySelectorAll('[data-cell]')
    const board = document.getElementById('board')
    let circleTurn
    cellElelments.forEach(cell => {
        cell.addEventListener('click', handleClick, { once: true })
    })

    function handleClick(e) {
        const cell = e.target
        const currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS
        placeMark(cell, currentClass)

        swapTurns()
        setBoardHoverClass()
    }

    function placeMark(cell, currentClass) {
        cell.classList.add(currentClass);
    }

    function swapTurns() {
        circleTurn = !circleTurn
    }

    function setBoardHoverClass() {
        board.classList.remove(X_CLASS)
        board.classList.remove(CIRCLE_CLASS)
        if (circleTurn) {
            board.classList.add(CIRCLE_CLASS)
        } else {
            board.classList.add(X_CLASS)
        }
    }
    return (
        <div>
            <div className='board' id='board'>
                <div className='cell ' data-cell></div>
                <div className='cell ' data-cell></div>
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