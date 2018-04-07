import React from 'react';

import Square from './Square';

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board: [['hello']],
    };
  }

  render() {
    return (
      <div>
        <Square square={this.state.board[0]} />
      </div>
    );
  }
}

export default Board;
