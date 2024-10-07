import React from 'react';
import { useTable } from 'react-table';
import './ResponsiveTable.css'; 

const data = [
  { size: '4M/6W', UK: 6, EU: '36-37', Men: 4, Unisex: 8.9, CM: 23 },
  { size: '5M/7W', UK: 7, EU: '37-38', Men: 5, Unisex: 9.1, CM: 23.5 },
  { size: '5.5M/7.5W', UK: 7.5, EU: '38', Men: 5.5, Unisex: 9.3, CM: 23.8 },
  { size: '6M/8W', UK: 8, EU: '38-39', Men: 6, Unisex: 9.5, CM: 24.1 },
  { size: '6.5M/8.5W', UK: 8.5, EU: '39', Men: 6.5, Unisex: 9.7, CM: 24.6 },
  { size: '7M/9W', UK: 9, EU: '39-40', Men: 7, Unisex: 9.9, CM: 25.1 },
  { size: '7.5M/9.5W', UK: 9.5, EU: '40', Men: 7.5, Unisex: 10, CM: 25.4 },
  { size: '8M/10W', UK: 10, EU: '40-41', Men: 8, Unisex: 10.2, CM: 25.9 },
  { size: '8.5M/10.5W', UK: 10.5, EU: '41', Men: 8.5, Unisex: 10.3, CM: 26.2 },
  { size: '9M/11W', UK: 11, EU: '41-42', Men: 9, Unisex: 10.5, CM: 26.7 },
  { size: '9.5M/11.5W', UK: 11.5, EU: '42', Men: 9.5, Unisex: 10.7, CM: 27.1 },
  { size: '10M/12W', UK: 12, EU: '42-43', Men: 10, Unisex: 10.9, CM: 27.6 },
  { size: '10.5M/12.5W', UK: 10.5, EU: '43', Men: 10.5, Unisex: 11.1, CM: 28.3 },
  { size: '11M/13W', UK: 11, EU: '44-45', Men: 11, Unisex: 11.3, CM: 28.6 },
  { size: '11.5M/13.5W', UK: 11.5, EU: '45', Men: 11.5, Unisex: 11.6, CM: 29.4 },
  { size: '12M/14W', UK: 12, EU: '46', Men: 12, Unisex: 11.9, CM: 30.2 },
  { size: '13M/15W', UK: 13, EU: '47', Men: 13, Unisex: 12.2, CM: 31 },
  { size: '14M/16W', UK: 14, EU: '48', Men: 14, Unisex: 12.5, CM: 31.5 },
];

const columns = [
  { Header: 'Size', accessor: 'size' },
  { Header: 'UK', accessor: 'UK' },
  { Header: 'EU', accessor: 'EU' },
  { Header: 'Men', accessor: 'Men' },
  { Header: 'Unisex', accessor: 'Unisex' },
  { Header: 'CM', accessor: 'CM' },
];

const ResponsiveTable = () => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data });

  return (
    <div className="table-responsive">
        <p className='ssma'>Size Guide</p>
        <p className='ssma3'>The length (inches & centimeters) in the chart is the inner measurement and should correspond to the length of your feet.</p>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => (
                  <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ResponsiveTable;
