import React from 'react';

const Cell = ({ data, open }) => {
  const renderCell = () => {
    if (data.isOpen) {
      if (data.count === 0) {
        return (
          <div className="cell-open" onClick={() => open(data)} />
        );
      } else if (data.hasMine) {
        return (
          <div className="cell-open" onClick={() => open(data)}>
            m
          </div>
        );
      } else {
        return (
          <div className="cell-open" onClick={() => open(data)}>
            {data.count}
          </div>
        );
      }
      } else {
        return (
          <div className="cell" onClick={() => open(data)} />
        );
      }
    }
    return renderCell();
  }
};


export default Cell;
