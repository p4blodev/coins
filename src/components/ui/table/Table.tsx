/* eslint-disable no-prototype-builtins */
import React from 'react';
import { TableTypes } from './Table.types';

export const Table = (props: TableTypes) => {
  const { data, headers, customRenderers, onRowClick } = props;

  const onRowClicked = (item: any) => {
    if (onRowClick) onRowClick(item);
  };

  const renderRow = (item: any) => {
    const rows = Object.keys(headers).map((key) => {
      if (item.hasOwnProperty(key)) {
        const customRenderer = customRenderers?.[key];
        if (customRenderer) {
          return <td key={key}>{customRenderer(item)}</td>;
        }

        return <td key={key}>{item[key]}</td>;
      }
      return <></>;
    });

    return <tr onClick={() => onRowClicked(item)}>{rows}</tr>;
  };

  const getHeaders = () => {
    const rowHeader = Object.keys(headers).map((key) => {
      return <th key={key}>{headers[key]}</th>;
    });

    return rowHeader;
  };

  return (
    <table>
      <thead>{<tr>{getHeaders()}</tr>}</thead>
      <tbody>{data.map(renderRow)}</tbody>
    </table>
  );
};
