import React,{useState} from 'react';
import SelectBtn from './SelectBtn';
import {connect} from 'react-redux';
import {createStore} from '../actions/StoreAction'
import { DatePickr } from './DatePickr';
import { TextField,Button } from '@material-ui/core';


function Form(props) {
    const [area, setArea] = useState('');
    const [category,setCategory]=useState('')
    const [oDate,setODate]=useState(new Date())
    const [cDate,setCDate]=useState(new Date())
    const [name,setName]=useState('')
    const addStore=()=>{
      if(cDate<=oDate){
        alert("closing date should be head of closing date")
        return
      }
      const STORE={
        name,
        area,
        category,
        oDate,
        cDate
      }
        props.createStore(STORE)
        alert("store added")
    }

    return (<>
    <h1>Add Store</h1>
        <div className="form">
            <TextField id="component-outlined" value={name} onChange={(e)=>{setName(e.target.value)}} label="Name"  />
            <SelectBtn val={area} name="Area" change={(x)=>{setArea(x)}} list={["Thane","Pune","Mumbai Suburban","Nashik","Nagpur","Ahmednagar","Solapur"]}/>
            <SelectBtn val={category} name="Category" change={x=>setCategory(x)} list={["Grocery","Butcher","Baker","Chemist","Stationery shop"]}/>
            <DatePickr val={oDate} change={x=>setODate(x)}/>
            <DatePickr val={cDate} change={x=>setCDate(x)}/>
            <Button variant="contained" color="primary" onClick={addStore}>Add Store  </Button>
        </div>
        </>
    )
}

const mapStateToProps = (state)=>{
  return{
      stores:state.store.stores
  }
}

export default connect(mapStateToProps,{createStore})(Form)
