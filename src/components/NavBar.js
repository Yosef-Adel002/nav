import React from 'react'
import classes from './Nav.module.css'
import { NavLink  } from 'react-router-dom'
import logo from '../assets/logo.png'
import MenuIcon from '@mui/icons-material/Menu';
import ClearIcon from '@mui/icons-material/Clear';
import { useState } from 'react';
const NavBar = () => {
const [active,setActive] = useState("sleepOptions")

  return (
    <div className={classes.nav}>
        <div className={classes.Brand}>
            <div className={classes.logo}>
                <img src={logo}/>
            </div>
            <div className={classes.title}>
                <h3>JoeTech</h3>
            </div>
        </div>
        <div className={classes[active]}>
            <div className={classes.links}>
            <NavLink to='/' exact> <h3>Start Here</h3></NavLink>
            <NavLink to='/contact' exact> <h3>Contact Me</h3></NavLink>
            <NavLink to='/portfolio' exact> <h3>About</h3></NavLink>
            <NavLink to='/portfolio' exact> <h3>Login</h3></NavLink>
            </div>
            
        </div>
        <div className={classes.bur} onClick={()=> {if(active=="optionsActive"){setActive("sleepOptions")}else{setActive("optionsActive")} }}>
            {
                active==='sleepOptions' ? <MenuIcon fontSize="large" /> : <ClearIcon fontSize="large"/>
            }
           

        </div>
    </div>
  )
}
//className={active? classes["options", "activeOptions"]: classes["sleepOptions","options"]}
//
export default NavBar