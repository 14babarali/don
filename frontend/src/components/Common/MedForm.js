
import React, { useState } from 'react'
import axios from 'axios'
export default function MedForm() {
 
    const [file, setFile]=useState('')
const upload=()=>{
    const formData=new FormData()

    formData.append('file',file)
    axios.post('http://localhost:8080/upload',formData).then(res=>console.log(res))
    .catch(err=>console.log(err))
}
  return (
    <div>
    <input type='file' onChange={(e)=>setFile(e.target.files[0])}/>
    <button type='button' onClick={upload}>Submit</button>
    </div>
  )
}
