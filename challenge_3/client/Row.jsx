import React from 'react';
import Cell from './Cell';

const Row = ({ cells, open }) => (
  <div className="row">
    {cells.map((data, index) => <Cell data={data} key={index} />)}
    <Cell open={open} />
  </div>
);

export default Row;
