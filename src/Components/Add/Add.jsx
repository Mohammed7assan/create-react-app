import React, { useState } from "react";
import styles from "./Add.module.css";
import {
  Button,
  FormControl,
  FormLabel,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import { Link } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom"

export const Add = () => {
  const navigate = useNavigate()
  const [info, setinfo] = useState("");

  const [Category, setCategory] = useState("");
  const [subCategory, setsubCategory] = useState("");
  const [priority, setpriority] = useState("");
  const [Agent, setAgent] = useState("");
  const [Requester, setRequester] = useState("");
  const [SRNumber, setSRNumber] = useState("");
  const formsubmit = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:9000/home`, {
        Category,
        subCategory,
        priority,
        Agent,
        Requester,
        SRNumber,
      })
      .then((data) => {
        console.log(data);
        toast.success("تم الأضافة بنجاح");
      });

      navigate('/')
  };
  const Clear = () => {
setRequester('');
  }
  return (
    <>
      <div>
        <br></br>
        <form id="fr" onSubmit={formsubmit} >
          <div className="row">
            <FormControl>
              <FormLabel id="demo-row-radio-buttons-group-label">Add</FormLabel>
            </FormControl>
          </div>
          <div className="row">
            <div className="col-md-6 text-align-center">
              <TextField
                fullWidth
                required
                value={info}
                error={!info}
                helperText={!info?"يرجى ادخال التصنيف":""}
                id="Category"
                label="Category"
                variant="outlined"
                onChange={(e) =>{

                  setCategory(e.target.value)
                setinfo(e.target.value)
                } 
                }
              />
              <br />
              <br />
              <FormControl fullWidth required value={info}
                error={!info}
                helperText={!info?" يرجى ادخال التصنيف الفرعى" :""}>
                <InputLabel  id="SubCategory">SubCategory</InputLabel>
                <Select
                  labelId="SubCategorylb"
                  id="demo-simple-select"
                  //  value={age}
                  label="Age"
                  onChange={(e) => {

                    setsubCategory(e.target.value)
                    setinfo(e.target.value)

                  }
                  }

                  //  onChange={handleChange}
                >
                  <MenuItem value="Web">Web</MenuItem>
                  <MenuItem value="Mobile">Mobile</MenuItem>
                  <MenuItem value="DeskTop">DeskTop</MenuItem>
                </Select>
              </FormControl>
              <br />
              <br />
              <FormControl fullWidth>
                <InputLabel id="Priority">Priority</InputLabel>
                <Select
                  labelId="Prioritylb"
                  id="Priority"
                  label="Priority"
                  onChange={(e) => setpriority(e.target.value)}
                >
                  <MenuItem value="High">High</MenuItem>
                  <MenuItem value="Medium">Medium</MenuItem>
                  <MenuItem value="low">low</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className="col-md-6">
              <TextField
                fullWidth
                required
                value={info}
                error={!info}
                helperText={!info?"يرجى ادخال اسم العميل":""}
                
                id="Agent"
                label="Agent"
                variant="outlined"
                onChange={(e) => {
                  setAgent(e.target.value)
                  setinfo(e.target.value)


                }
                }
              />

              <br />
              <br />

              <TextField
                fullWidth
                id="RequesterTxt"
                label="Requester"
                variant="outlined"
                onChange={(e) => setRequester(e.target.value)}
              />
              <br />
              <br />
              <TextField
                fullWidth
                required
                value={info}
                error={!info}
                helperText={!info?"يرجى ادخال رقم الطلب ":""}
                id="SrNumberTxt"
                label="Sr Number"
                variant="outlined"
                onChange={(e) =>
                  {

                    setSRNumber(e.target.value)
                    setinfo(e.target.value)

                  }
                  
                  }
              />
            </div>
          </div>
          <br />
          <div className="row">
            <Stack direction="row" spacing={2}>
              {/* <Link className="nav-link" to="/">
                <Button type="submit" variant="contained" color="error">
                  Add
                </Button>
              </Link> */}
                          <Button onClick={formsubmit} variant="contained" > SUBMIT </Button>


              <Button variant="contained" color="error" onClick={Clear}>
                Reset
              </Button>
              <Link className="nav-link" to="/">
                <Button variant="contained" color="error">
                  Back
                </Button>
              </Link>
            </Stack>
          </div>
        </form>
        <br />
      </div>
    </>
  );
};
