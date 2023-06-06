import React from 'react';

import './ScoreBoard.css';

const ScoreBoard = ({ scores, xPlaying }) => {
  const { xScore, oScore } = scores;
  return (
    <div>
      <div className='scoreboard'>
        <span className={`score x-score ${!xPlaying && 'inactive'}`}>
          ❌ - {xScore}
        </span>
        <span className={`score o-score ${xPlaying && 'inactive'}`}>
          ⭕- {oScore}
        </span>
      </div>
    </div>
  );
};

export default ScoreBoard;
