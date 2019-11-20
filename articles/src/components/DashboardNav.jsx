import React from "react";
import {Link} from 'react-router-dom'

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">Pintreach</div>
      <Link className="add-button" to="/addarticle">Add</Link>
    </div>
  );
}
