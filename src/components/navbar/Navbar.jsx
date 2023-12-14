import { NavLink } from 'react-router-dom';
import style from './navbar.module.css'
import React from "react";
import Friends from '../friends/Friends.jsx';
function Navbar({dataF}) {
  return (
    <div className={`${style.navbar} navbar`}>
      <div className={style.navbarlinks}>
        <NavLink to='/contant' className={style.links} >Profile</NavLink>
        <NavLink to='/dialogs' className={style.links} >Messenge</NavLink>
        <NavLink to='/friends' className={style.links} >Friends</NavLink>
          <div className={style.NavFnd}>
        {dataF.map((friends,inx) => <Friends key={inx} name={friends.name} img={friends.img}/>)}
          </div>
        </div>
    </div>
  );
}

export default Navbar;
