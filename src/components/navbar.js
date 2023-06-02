import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouseMedical,
  faTimes,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { Button } from "./Button";
import './navbar.css'

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button,setButton]=useState(true)

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton=()=>{
    if(window.innerWidth<=960){
      setButton(false);
    }else{
      setButton(true)
    }
  }
  useEffect(()=>{
    showButton()
  },[])


  window.addEventListener('resize',showButton)
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            MEDICUE
            <FontAwesomeIcon icon={faHouseMedical} />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            {click ? (
              <FontAwesomeIcon color="white" icon={faTimes} />
            ) : (
              <FontAwesomeIcon color="white" icon={faBars} />
            )}
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/services" className="nav-links" onClick={closeMobileMenu}>
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/doctors" className="nav-links" onClick={closeMobileMenu}>
                Doctors
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/signup" className="nav-links-mobile" onClick={closeMobileMenu}>
                Sign Up
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
