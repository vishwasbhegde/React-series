import React, { useState } from 'react'

export default function Users() {

    const [firstname, updatFirstName] = useState('John');

    function UpdateFirstname(){
        updatFirstName("Velu")
    }

  return (
    <>
    <div>{firstname}</div>
    Input : <input type="text" value={firstname} onChange={UpdateFirstname} />
    </>
  )
}
