import axios from "axios";
import { useEffect } from "react";
import React from 'react'
import { useState } from "react";
// import { Typography } from '@mui/material';
// import Button from '@mui/material/Button';

export default function Card() {
  const [details, setDetails] = useState([])
  

  const fetchDetails = async () =>{
    let response = await axios.get('https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb?fmt=raw&sole');
    setDetails(response.data)
    console.log(details);
}  
    useEffect(() => {
      fetchDetails()
    
    }, [])
    // let serialNumber = 0;
    const [serialNumber, setSerialNumber] = useState(1)
    

    const handleClick = (arg1) => {
      console.log(arg1);
      alert(arg1);
    }
   
   const deleteRow = (row, recordNumber, uName)=> {
    alert("Really want to delete this record "+row.first+" ?");
    //  how to send this is request to API ??  // need to chk with velu
      const element = document.getElementById(recordNumber);
      element.remove();
    }

    return (
        <>
        <h2 variant="h1">Random API name with table</h2>
        {/* <Button variant="contained">Hello World</Button> */}
        <table className="table-auto" border={"1px solid"}>
          <tr>
            <th  className="border border-slate-600 ...">SL</th>
            <th  className="border border-slate-600 ...">First Name</th>
            <th  className="border border-slate-600 ...">Last Name</th>
            <th  className="border border-slate-600 ...">E-mail</th>
            <th  className="border border-slate-600 ...">Address</th>
            <th  className="border border-slate-600 ...">Action</th>
          </tr>
        { details.map((row, index) =>(
         
        <tr data-value={index + serialNumber} id={index + serialNumber}>
            <td className="border border-slate-700 ...">{index + serialNumber}</td>
            <td className="border border-slate-700 ...">{row.first}</td>
            <td className="border border-slate-700 ...">{row.last}</td>
            <td className="border border-slate-700 ...">{row.email}</td>
            <td className="border border-slate-700 ...">{row.address}</td>
            <td className="border border-slate-700 ...">
              <button className="py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75" onClick={()=>handleClick(row.first)}>Edit/modify</button>

              <button className="btn py-2 px-4 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75" 
              onClick={() => deleteRow(row, index + serialNumber)}>
              Delete Row
              </button>
            </td>
          </tr>
        ))}
        </table>
        </>
    )
    
  
}
