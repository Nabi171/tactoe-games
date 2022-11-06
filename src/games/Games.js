import React from 'react';
import '../games/games.css';
const Games = () => {
    const X_CLASS = 'x'
    const CIRCLE_CLASS = 'circle'
    const WINNING_COMBINATIONS = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
    const cellElelments = document.querySelectorAll('[data-cell]')
    const board = document.getElementById('board')
    const winningMessageElement = document.getElementById('winningMessage')
    const winningMessageTextElemment = document.querySelector('[data-winning-message-text]')
    let circleTurn
    startGame()
    function startGame(params) {
        circleTurn = false
        cellElelments.forEach(cell => {
            cell.addEventListener('click', handleClick, { once: true })
        })
        setBoardHoverClass()
    }

    function handleClick(e) {
        const cell = e.target
        const currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS
        placeMark(cell, currentClass)
        if (checkWin(currentClass)) {
            endGame(false)
            console.log('winner')
        }
        swapTurns()
        setBoardHoverClass()
    }

    function endGame(draw) {
        if (draw) {

        }
        else {
            winningMessageTextElemment.innerText = `${circleTurn ? "0's" : "x's"} Wins!`;
        }
        winningMessageElement.classList.add('show')
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

    function checkWin(currentClass) {
        return WINNING_COMBINATIONS.some(combination => {
            return combination.every(index => {
                return cellElelments[index].classList.contains(currentClass)
            })
        })
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