import { NavLink } from 'react-router-dom';
import style from './navbar.module.css'
import React from "react";
function Navbar() {
  return (
    <div className={`${style.navbar} navbar`}>
        <NavLink to='/contant' className={style.links} >Profile</NavLink>
        <NavLink to='/dialogs' className={style.links} >Messenge</NavLink>
        <NavLink to='' className={style.links} >Users</NavLink>
    </div>
  );
}

export default Navbar;
