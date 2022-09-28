import React from "react";

export const Table = (props: any) => {
  const { items, headers, customRenderers } = props;

  function renderRow(item: any) {
    const rows = Object.keys(headers).map((key) => {
      if (item.hasOwnProperty(key)) {
        const customRenderer = customRenderers?.[key];
        if (customRenderer) {
          return <td>{customRenderer(item)}</td>;
        }

        return <td>{item[key]}</td>;
      }
      return <></>;
    });

    return <tr>{rows}</tr>;
  }

  const getHeaders = () => {
    const rowHeader = Object.keys(headers).map((key) => {
      return <th key={key}>{headers[key]}</th>;
    });

    return rowHeader;
  };

  return (
    <table>
      <thead>{<tr>{getHeaders()}</tr>}</thead>
      <tbody>{items.map(renderRow)}</tbody>
    </table>
  );
};
