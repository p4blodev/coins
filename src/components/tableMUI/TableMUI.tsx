import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export const TableMUI = ({
  headers,
  data,
  onRowClick,
}: {
  headers: any;
  data: any;
  onRowClick?: (item: any) => void;
}) => {
  const onRowClicked = (item: any) => {
    if (onRowClick) onRowClick(item);
  };
  const renderTableRows = () => {
    const rows: any = [];
    Object.keys(headers).forEach((key, index) => {
      rows.push(
        <TableCell key={key} align={index === 0 ? "left" : "right"}>
          {headers[key]}
        </TableCell>
      );
    });

    return rows;
  };

  const renderRows = () => {
    const returnedRows: any = [];

    data.forEach((current: any) => {
      const cells: any = [];

      Object.keys(headers).forEach((key, index) => {
        cells.push(
          <TableCell
            key={key}
            component="th"
            scope="row"
            align={index === 0 ? "left" : "right"}
          >
            {current[key]}
          </TableCell>
        );
      });

      returnedRows.push(
        <TableRow
          key={current.id}
          sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
          onClick={() => onRowClicked(current)}
        >
          {cells}
        </TableRow>
      );
    });

    return returnedRows;
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="coins table">
        <TableHead>
          <TableRow>{renderTableRows()}</TableRow>
        </TableHead>
        <TableBody>{renderRows()}</TableBody>
      </Table>
    </TableContainer>
  );
};
