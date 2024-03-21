import React from 'react'
import styles from './Home.module.css';
import {Search} from "../Search/Search";
import {DataTable} from "../DataTable/DataTable";


export const Home = () => {
  return (
<>
<Search/>
<DataTable/>
</>
    )
}
