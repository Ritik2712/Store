import React from 'react'
import {connect} from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import {deleteStore} from '../actions/StoreAction'
import {Link} from 'react-router-dom'

const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });

  

function Store(props) {
    console.log(props);
    const classes = useStyles();
    return (
        <div>
            <h1>Stores</h1>
            <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Area</TableCell>
            <TableCell align="right">Category</TableCell>
            <TableCell align="right">Status</TableCell>
            <TableCell align="right">Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.stores.map((store,index) => (

            <TableRow key={index}>
              <TableCell component="th" scope="row">
                {store.name}
              </TableCell>
              <TableCell align="right">{store.area}</TableCell>
              <TableCell align="right">{store.category}</TableCell>
              <TableCell align="right">{(new Date()<store.cDate) && (new Date()>store.oDate)?"Open":"Close"}</TableCell>
              <TableCell align="right">
                <Button variant="contained" color="danger" onClick={()=>{props.deleteStore(index)}}>Delete </Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
    )
}

const mapStateToProps = (state)=>{
    return{
        stores:state.store.stores
    }
}

export default connect(mapStateToProps,{deleteStore})(Store)
