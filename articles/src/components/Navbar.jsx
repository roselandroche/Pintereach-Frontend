import React from "react";
import {Link} from 'react-router-dom'

export default function normalNavbar({title}) {
  return (
      <div className="navbar">
      <Link className="back-arrow" to="/"><img src="/img/back-icon.svg" alt="Back icon"/></Link>
      <div className="logo">{title}</div>
      <div className="logo"></div>
    </div>
  );
}
