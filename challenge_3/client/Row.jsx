import React from 'react';
import Cell from './Cell';

const Row = ({ cells }) => (
  <div className="row">
    {cells.map((data, index) => <Cell data={data} key={index} />)}
  </div>
);

export default Row;
