import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilm } from '@fortawesome/free-solid-svg-icons'

const NavBar = () => (
  <div className="nav-bar">
      <div className="nav-logo d-flex">
          <h2 ><a href="/" className="link-title" style={{"color": "white"}}>MovieDb</a></h2>
          <i><FontAwesomeIcon style={{"color": "red"}} icon={faFilm}/></i>
      </div>
  </div>
);

export default NavBar;