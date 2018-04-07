import React from 'react';
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
    // console.table(board);
    return board;
  }

  open(cell) {
    const asyncCountMines = new Promise((resolve) => {
      const mines = this.findMines(cell);
      resolve(mines);
    })

    asyncCountMines.then((numberOfMines) => {
      console.log(numberOfMines);
      const rows = this.states.rows;
      const current = rows[cell.y][cell.x];

      if (current.hasMine && this.props.openCells === 0) {
        const newRows = this.createBoard(this.props);
        this.setState({
          rows: newRows,
        }, () => {
          this.open(cell);
        });
      } else if (!cell.hasFlag && !current.isOpen) {
        this.props.openCellClick();

        current.isOpen = true;
        current.count = numberOfMines;

        this.setState({ rows });
      }
    });
  }

  findMines(cell) {
    let minesInProximity = 0;
    for (let row = -1; row <= 1; row += 1) {
      for (let col = -1; col <= 1; col += 1) {
        if (cell.y + row >= 0 && cell.x + col >= 0) {
          if (cell.y + row < this.state.rows.length && cell.x + col < this.state.rows[0].length) {
            if (this.state.rows[cell.y + row][cell.x + col].hasMine && !(row === 0 && col === 0)) {
              minesInProximity += 1;
            }
          }
        }
      }
    }
    return minesInProximity;
  }

  render() {
    return (
      <div className="board">
        {this.state.rows.map((row, index) => <Row cells={row} key={index} />)}
        <Row open={this.open} />
      </div>
    );
  }
}

export default Board;
