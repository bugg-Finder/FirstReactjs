import { Outlet, Link } from "react-router-dom";
import React from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const Layout = () => {
  return (
    <>
      {/* <nav>
      <input type="checkbox" name="" id="" />
        <div className="hamburger-lines">
          <span className="line line1"></span>
          <span className="line line2"></span>
          <span className="line line3"></span>
        </div>
        <ul classNameName=" flex justify-center space-x-8 bg-slate-500">
          <li >
            <Link to="Home">Home</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/Contect">Contect</Link>
          </li>
        </ul>
      </nav> */}

      <Outlet />

 


    <nav class="navbar">
      <div class="navbar-container container">
        <input type="checkbox" name="" id="" />
        <div class="hamburger-lines">
          <span class="line line1"></span>
          <span class="line line2"></span>
          <span class="line line3"></span>
        </div>
        <ul class="menu-items">
          <li> <Link to="Home">Home</Link></li>
          <li><Link to="/About">About</Link></li>
          <li><Link to="/Contect">Contect</Link></li>
          <button><Link to="/About">Login</Link></button>
        </ul>
        <h1 class="logo">Navbar</h1>
      </div>
    </nav>
    </>
  )
};

export default Layout;