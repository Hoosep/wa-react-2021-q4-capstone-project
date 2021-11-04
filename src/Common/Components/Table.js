import React from 'react';

import { TableStyled } from 'Styles/Table';

const Table = ({ data, title }) => (
  <TableStyled>
    {title && (
      <thead>
        <tr>
          <th>Header</th>
        </tr>
      </thead>
    )}
    <tbody>
      {data.map((row) => (
        <tr key={row.spec_name}>
          <td>{row.spec_name}</td>
          <td>{row.spec_value}</td>
        </tr>
      ))}
    </tbody>
  </TableStyled>
);

export default Table;
