import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

export default function SelectBtn(props) {
    const useStyles = makeStyles((theme) => ({
        formControl: {
          margin: theme.spacing(1),
          minWidth: 120,
        },
        selectEmpty: {
          marginTop: theme.spacing(2),
        },
      }));
      const classes = useStyles();

    
    const menu=props.list.map(item=>{
        return(
          <MenuItem key={item} value={item}>{item}</MenuItem>
        )
    })
  
    const handleChange = (event) => {
      props.change(event.target.value);
    };
    return (
        <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-helper-label">{props.name}</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={props.val}
          label={props.name}
          onChange={handleChange}
        >
         {menu}
        </Select>
      </FormControl>
        </div>
    )
}
