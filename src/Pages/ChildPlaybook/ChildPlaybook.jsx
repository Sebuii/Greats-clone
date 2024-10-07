import React from 'react'
import { useParams } from 'react-router-dom';


function ChildPlaybook() {
    const { id } = useParams(); 

  return (
    <div>
    <div>{id}</div>
  </div>
  )
}

export default ChildPlaybook
