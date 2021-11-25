import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    textAlign:"center"
  },
  body: {
    fontSize: 14,
    textAlign:"center"
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
},
}))(TableRow);

// function createData(name, apellido, nick, mail) {
//     return { name, apellido, nick, mail };
// }

const rows = [
  // createData('Franco', 'Valenzuela', 'Bruno', 'fv@gmail.com.ar'),
  // createData('Patricia', 'Borges', 'La Pato', 'pbv@gmail.com.ar'),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const useStyles = makeStyles({
    table: {
    minWidth: 700,
  },
});

export default function CustomizedTables(props) {
  const { DatoFinal } = props
  console.log(DatoFinal)
  const Listado = [];
  Listado.push(DatoFinal)
  const classes = useStyles();

  Listado.map((x)=>{
    console.log(x[0])
  })

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Nombre</StyledTableCell>
            <StyledTableCell align="right">Apellido</StyledTableCell>
            <StyledTableCell align="right">Nickname</StyledTableCell>
            <StyledTableCell align="right">E-mail</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Listado.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row[0]}
              </StyledTableCell>
              <StyledTableCell align="right">{row[1]}</StyledTableCell>
              <StyledTableCell align="right">{row[2]}</StyledTableCell>
              <StyledTableCell align="right">{row[3]}</StyledTableCell>
              
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
