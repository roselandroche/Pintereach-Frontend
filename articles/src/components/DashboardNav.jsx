import React from "react";
import {Link} from 'react-router-dom'

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">Pintereach</div>
      <div className="nav-button-container">
      <Link className="add-button" to="/addarticle">Add</Link>
      <Link className="logout-button" to="/logout">Logout</Link>
      </div>
    </div>
  );
}
