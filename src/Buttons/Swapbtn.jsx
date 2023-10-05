import React from 'react'
import { Link } from 'react-router-dom'
import '../CSS/Swapbtn.css'
function Swapbtn({name, link}) {
  return (
    <div>
      <button class="Swbtn-31 rounded-lg">
  <span class="Swtext-container ">
    <Link to={link} class="Swtext ">{name}</Link>
  </span>
</button>

    </div>
  )
}

export default Swapbtn
