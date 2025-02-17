import React from 'react'
import styles from './Layout.module.css';
import {Navbar} from "../Navbar/Navbar";
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <>
    <Navbar  />
    <div className="container">
      <Outlet></Outlet>
    </div>  
    
    </>
    )
}
