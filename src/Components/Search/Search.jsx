import React, { useEffect, useState } from "react";
import styles from "./Search.module.css";
import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  InputLabel,
  
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  Stack,
  TextField,
} from "@mui/material";

import { Link } from 'react-router-dom';
import axios from "axios";

export const Search = () => {
  const[data,setdata]=useState([]);
  const[record,setrecord]=useState([]);
useEffect(()=>{
  axios.get(`http://localhost:9000/home`)
    .then((res)=>{
      setdata(res.data)
      setrecord(res.data)
      console.log(res.data)
    })
    .catch(err=>console.log(err))
},[])
const FilterSR=(e)=>{
setrecord(data.filter(f=>f.SRNumber.includes(e.target.value)))
}
  return (
    <div>
      <br></br>
      <div className="row">
        <Link className="nav-link" to="add">
        
      <Button color="primary" variant="contained" style={{marginRight:10}}  >Add</Button>
        </Link>

      </div>
      <div className="row">
        <FormControl>
          <FormLabel id="demo-row-radio-buttons-group-label">Search</FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel
              value="Match"
              control={<Radio />}
              label="Match"
            />
            <FormControlLabel value="All" control={<Radio />} label="All" />
            <FormControlLabel value="Any" control={<Radio />} label="Any" />
          
          </RadioGroup>
        </FormControl>
      </div>
      <div className="row">
        <div className="col-md-6 text-align-center">
          <TextField fullWidth id="SRNumber" label="Sr Number" variant="outlined" onChange={FilterSR} />
          <br />
          <br />

          <TextField fullWidth id="Requester" label="Requester" variant="outlined" />
        </div>
        <div className="col-md-6">
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Status</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              //  value={age}
              label="Status"
              //  onChange={handleChange}
            >
              <MenuItem value="Assigned">Assigned</MenuItem>
              <MenuItem value="Pending">Pending</MenuItem>
              <MenuItem value="Closed">Closed</MenuItem>
            </Select>
          </FormControl>
          <br />
          <br />

          <TextField fullWidth id="Subject" label="Subject" variant="outlined" />
        </div>
      </div>
      <br />
      <div className="row">
        <Stack direction="row" spacing={2}>
          <Button variant="contained" color="error">
            Advanced
          </Button>
          <Button variant="contained" color="error">
            Search
          </Button>
          <Button variant="contained" color="error">
            Reset
          </Button>
        </Stack>
      </div>
      <br />
    </div>
  );
};
