import React from 'react';
import Board from './Board';

class Minesweeper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: 10,
      columns: 10,
      flags: 10,
      mines: 10,
    };
  }


  render() {
    return (
      <div className="minesweeper">
        <Board
          rows={this.state.rows}
          columns={this.state.columns}
          mines={this.state.mines}
        />
      </div>
    );
  }
}

export default Minesweeper;
