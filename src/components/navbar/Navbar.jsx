import style from './navbar.module.css'

function Navbar() {
  return (
    <div className={`${style.navbar} navbar`}>
        <a href="#" className={style.links} >Profile</a>
        <a href="#" className={style.links} >Messenge</a>
        <a href="#" className={style.links} >Users</a>
    </div>
  );
}

export default Navbar;
