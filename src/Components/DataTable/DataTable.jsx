import React, { useEffect, useState } from "react";
import styles from "./DataTable.module.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Avatar, Button } from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import { Link } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom"

export const DataTable = () => {
  const navigate = useNavigate()

  const[data,setdata]=useState([]);
  const getAllData=()=>{
    fetch('http://localhost:9000/home/')
    .then((res)=>res.json())
    .then((data)=>{
      console.log(data);
      setdata(data);
    })
  }
useEffect(()=>{
  getAllData();

},[])
const deleterow=(id)=>{
  console.log(id)
  
  axios
    .delete(
     `http://localhost:9000/home/${id}`,
    
    ).then((res)=>res) 
     .then((data)=>{
      console.log(data);
      toast.success("تم الحذف بنجاح");
      getAllData();

    })
}
 const handleEdit = (id) => {
   
   // console.log(id)
   
   axios
   .get(
     `http://localhost:9000/home/${id}`,
     
     ).then((res)=>res) 
     .then((data)=>{
     navigate('/edit/${data.data.id}')
       console.log(data.data.id);
  //     toast.success("تم الحذف بنجاح");
  //     getAllData();

     })

 }
  return (
    <>
    
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell align="right">SR Number</TableCell>
              <TableCell align="right">Category</TableCell>
              <TableCell align="right">Status</TableCell>
              <TableCell align="right">Requester</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row" key={row.SRNumber}>
                  <Avatar sx={{ bgcolor: deepOrange[500] }}>{row.avatar}</Avatar>
                </TableCell>
                <TableCell align="right">{row.SRNumber	}</TableCell>
                <TableCell align="right">{row.Category}</TableCell>
                <TableCell align="right">{row.Status}</TableCell>
                <TableCell align="right">{row.Requester}</TableCell>
                <TableCell>
                <Link to={`/edit/${row.id}`} >

                  <Button
                    color="primary"
                    variant="contained"
                    style={{ marginRight: 10 }}
                    // component={Link}
                    // to={'/edit/${id}'}
                  onClick={()=> { console.log(row.id) }}
                  >
                    Edit
                  </Button>
            
                </Link>
              
                  <Button
                    color="secondary"
                    variant="contained"
                    onClick={() => deleterow(row.id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    
      
    </>
  );
};
