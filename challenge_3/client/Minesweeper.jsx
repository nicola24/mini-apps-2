import React from 'react';
import Board from './Board';
import BoardHead from './BoardHead';

class Minesweeper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'waiting', // waiting, running, ended
      rows: 10,
      columns: 10,
      flags: 10,
      mines: 10,
      time: 0,
      openCells: 0,
    };
    this.intervals = [];
  }

  setInterval(fn, t) {
    this.intervals.push(setInterval(fn, t));
  }

  tick() {
    if (this.state.openCells > 0 && this.state.status === 'running') {
      const time = this.state.time + 1;
      this.setState({ time }); // === this.setState({ time: time });
    }
  }

  handleCellClick() {
    if (this.state.openCells === 0 && this.state.status !== 'running') {
      this.setState({
        status: 'running',
      }, () => {
        this.setInterval(this.tick, 1000);
      });
    }
  }

  render() {
    return (
      <div className="minesweeper">
        <BoardHead time={this.state.time} flagCount={this.state.flags} />
        <Board
          rows={this.state.rows}
          columns={this.state.columns}
          mines={this.state.mines}
          openCells={this.state.openCells}
          openCellClick={this.handleCellClick}
        />
      </div>
    );
  }
}

export default Minesweeper;
