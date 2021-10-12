import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import {Link} from 'react-router-dom'
import { Button } from '@material-ui/core';
const Navbar = () => {
  return (
    <AppBar position="static">
        <Button  variant="contained" color="primary"><Link to="/"> Add Store</Link></Button>
        <Button  variant="contained" color="primary"><Link to="/stores" >Stores</Link></Button>
    </AppBar>
  );
};
export default Navbar;