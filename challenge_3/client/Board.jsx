import React from 'react';
import PropTypes from 'prop-types';
import Row from './Row';

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: this.createBoard(props),
    };
  }

  createBoard() {
    const board = [];

    for (let i = 0; i < this.props.rows; i += 1) {
      board.push([]);
      for (let j = 0; j < this.props.columns; j += 1) {
        board[i].push({
          x: j,
          y: i,
          count: 0,
          isOpen: false,
          hasMine: false,
          hasFlag: false,
        });
      }
    }
    // after we create the board we add our mines
    for (let k = 0; k < this.props.mines; k += 1) {
      const randomRow = Math.floor(Math.random() * this.props.rows);
      const randomCol = Math.floor(Math.random() * this.props.columns);

      const cell = board[randomRow][randomCol];

      if (cell.hasMine) {
        k -= 1;
      } else {
        cell.hasMine = true;
      }
    }
    console.table(board);
    return board;
  }

  render() {
    return (
      <div className="board">
        {this.state.rows.map((row, index) => <Row cells={row} key={index} />)}
      </div>
    );
  }
}

Board.propTypes = {
  rows: PropTypes.number,
  columns: PropTypes.number,
  mines: PropTypes.number,
};

Board.defaultProps = {
  rows: 10,
  columns: 10,
  mines: 10,
};

export default Board;
