import React from 'react';

const Table = ({ data, title }) => (
  <table>
    {title && (
      <thead>
        <tr>
          <th>Header</th>
        </tr>
      </thead>
    )}
    <tbody>
      {data.map((row) => (
        <tr>
          <td>{row.spec_name}</td>
          <td>{row.spec_value}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default Table;
