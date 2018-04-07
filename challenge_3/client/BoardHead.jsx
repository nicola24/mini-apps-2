import React from 'react';

const BoardHead = ({ time, flagCount }) => {
  const minutes = Math.floor(time / 60);
  const seconds = time - (minutes * 60) || 0;

  const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
  const timer = `${minutes}:${formattedSeconds}`;

  return (
    <div className="board-head">
      <div className="flag-count">{flagCount}</div>
      <button className="reset">Reset</button>
      <div className="timer">
        {timer}
      </div>
    </div>
  );
};

export default BoardHead;
