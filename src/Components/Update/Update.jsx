import styles from "./Update.module.css";
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import {
  Button,
  FormControl,
  FormLabel,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import TextField from "@mui/material/TextField";

import { Link } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
export const Update = () => {
  const { id } = useParams();
  console.log(id);
  const navigate = useNavigate();
  const [data, setdata] = useState([]);
  const [values, setvalues] = useState({
    avatar: "",
    Category: "",
    SRNumber: "",
    Requester: "",
    Status: "",
  });

  const [avatar, setavatar] = useState("");
  const [Category, setCategory] = useState("");
  const [SRNumber, setSRNumber] = useState("");
  const [Requester, setRequester] = useState("");
  const [Status, setStatus] = useState("");
  useEffect(() => {
    axios
      .get(`http://localhost:9000/home/${id}`)
      .then((res) => setdata(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handCategoryChange = (e) => {
    setCategory(e.target.value);
  };
  const formsubmit = (e) => {
    e.preventDefault();

    axios
      .put(`http://localhost:9000/home/${id}`, {
        avatar,
        Category,
        SRNumber,
        Requester,
        Status,
      })
      .then((res) => {
        console.log(res);
        navigate("/");
        toast.success("تم التعديل بنجاح");
      });
  };
  return (
    <>
      <div>
        <br></br>
        <form onSubmit={formsubmit}>
          <div className="row">
            <FormControl>
              <FormLabel id="demo-row-radio-buttons-group-label">
                Edit
              </FormLabel>
            </FormControl>
          </div>
          <Typography>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 2, width: "100ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <div className="row">
              <div className="col-md-6 text-align-center">
                <TextField
                  fullWidth
                  id="Avatar"
                  label="Avatar"
                  variant="outlined"
                  value={data.avatar}
                  onChange={(e) => setavatar(e.target.value)}
                />
                <br />
                <br />
                <TextField
                  value={data.Category}
                  onChange={(e) => handCategoryChange(e)}
                  label="Category"
                  variant="outlined"
                />{" "}
                <br />
                {/* <TextField
                fullWidth
                id="Category"
                label="Category"
                variant="outlined"
                value={data.Category}
                // onChange={(e) => setCategory(e.target.value)}
              /> */}
                <br />
                <br />
              </div>
              <div className="col-md-6">
                <TextField
                  fullWidth
                  id="SrNumberTxt"
                  label="Sr Number"
                  variant="outlined"
                  value={data.SRNumber}
                  onChange={(e) => setSRNumber(e.target.value)}
                />
                <br />
                <br />
                <TextField
                  fullWidth
                  id="RequesterTxt"
                  label="Requester"
                  variant="outlined"
                  value={data.Requester}
                  onChange={(e) => setRequester(e.target.value)}
                />
              </div>
            </div>
            <br />
            <div className="div">
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Status</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={data.Status}
                  label="Status"
                  onChange={(e) => setStatus(e.target.value)}
                >
                  <MenuItem value="Assigned">Assigned</MenuItem>
                  <MenuItem value="Pending">Pending</MenuItem>
                  <MenuItem value="Closed">Closed</MenuItem>
                </Select>
              </FormControl>
            </div>
            <br />
            <div className="row">
              <Stack direction="row" spacing={2}>
                {/* <Link className="nav-link" to="/">
                <Button type="submit" variant="contained" color="error">
                  Add
                </Button>
              </Link> */}
                <Button onClick={formsubmit} variant="contained">
                  SUBMIT
                </Button>

                <Link className="nav-link" to="/">
                  <Button variant="contained" color="error">
                    Back
                  </Button>
                </Link>
              </Stack>
            </div>
          </Box>
          </Typography>
          
        </form>
        <br />
      </div>
    </>
  );
};
