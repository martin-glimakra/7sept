import React from 'react'
import { Link } from "react-router-dom";

export default function Start() {
  return (
    <div>
      <div>
        <Link to={'/bokning'}>till bokning</Link>
      </div>
      <div>
        <Link to={'/vilkor'}>till vilkor</Link>
      </div>
    </div>
  )
}
