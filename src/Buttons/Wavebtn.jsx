import React from 'react'
import { Link } from 'react-router-dom'
import '../CSS/Wavebtn.css'
import { useAuth0 } from '@auth0/auth0-react'
function Wavebtn({name, link}) {
  return (
      <Link to={link} class="Wavebtn">
        <button className='text-md font-satoshi mt-1 '>
        {name}
    </button>
    </Link>
  )
}

export default Wavebtn
