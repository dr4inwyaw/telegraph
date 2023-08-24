import style from './header.module.css'
import logo from '../../img/pngegg.png'


function Header() {
  return (
    <div className={`${style.header} header`} >
        <img className={style.logo} src={logo}/>
        <a className={style.linkLogo}>TeleGraph</a>
    </div>
  );
}

export default Header;
