import * as React from 'react'

interface IGameOverProps {
  isShow: boolean
  isMyWin: boolean
  onRestartGame: () => void
}

const GameOver: React.FC<IGameOverProps> = ({ isShow, isMyWin, onRestartGame }) => {

  return isShow
    ? (
      <div className='game-over'>
        <b className={isMyWin ? 'win' : 'lose'}>
          {isMyWin ? 'Поздравляю! Ты выиграл!' : 'Увы! Ты проиграл!'}
        </b>
        <button className='game-over-btn' onClick={onRestartGame}>Играть еще раз?</button>
      </div>
    ) : null
};

export default GameOver;
