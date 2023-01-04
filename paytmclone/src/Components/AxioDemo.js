import React, { useState } from 'react';
import Axios from 'axios';

export default function AxioDemo() {
const [listOfData, setlisOfData ] = useState("");

    const getJoke = () =>{
      Axios.get("https://random-data-api.com/api/v2/users?size=2&is_xml=true").then(
      (response) => {
        console.log(response);
        setlisOfData(response.data.uid + "..." + response.data.punchline)
      }
      )
        
        
        
    }

  return (
    <>
    <h1>This is for axios practise</h1>

    <button onClick={getJoke}>Click me to see the API date in console</button>

    <h2>
    {listOfData}
    </h2>
   
    </>
  )
}
