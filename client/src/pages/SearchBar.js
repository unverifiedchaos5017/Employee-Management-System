import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import SearchBar from "material-ui-search-bar";


const useStyles = makeStyles({
  table: {
    minWidth: 650
  }
});

const originalRows = [
  { name: "Pizza", Department: "Code-Paste", Email: "saifkhan@gmail.com"},
  { name: "Pizza", Department: "Clerk", Email: "saifkhan@gmail.com"},
  { name: "Pizza", Department: "Fuck", Email: "saifkhan@gmail.com"},
  { name: "Pizza", Department: "Code-Paste", Email: "saifkhan@gmail.com"},
  { name: "Pizza", Department: "Code-Paste", Email: "saifkhan@gmail.com"},
  { name: "Pizza", Department: "Code-Paste", Email: "saifkhan@gmail.com"},
];

export default function BasicTable() {
  const [rows, setRows] = useState(originalRows);
  const [searched, setSearched] = useState("");
  const classes = useStyles();

  const requestSearch = (searchedVal) => {
    const filteredRows = originalRows.filter((row) => {
      return row.Department.toLowerCase().includes(searchedVal.toLowerCase());
    });
    setRows(filteredRows);
  };

  const cancelSearch = () => {
    setSearched("");
    requestSearch(searched);
  };

  return (
    <>
      <Paper>
        <SearchBar
          value={searched}
          onChange={(searchVal) => requestSearch(searchVal)}
          onCancelSearch={() => cancelSearch()}
        />
        <TableContainer>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Food (100g serving)</TableCell>
                <TableCell align="right">Department</TableCell>
                <TableCell align="right">Email</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.Department}</TableCell>
                  <TableCell align="right">{row.Email}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
      <br />
    </>
  );
}
