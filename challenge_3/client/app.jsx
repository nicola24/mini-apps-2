import React from 'react';
import ReactDOM from 'react-dom';

import Minesweeper from './Minesweeper';

ReactDOM.render(<Minesweeper />, document.getElementById('app'));

module.hot.accept();
