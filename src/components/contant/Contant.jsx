import style from './contant.module.css'
import avatar from '../../img/7307566.jpg'

function Contant() {
  return (
    <div className={`${style.contant} contant`}>
      <div className={style.user}>
        <div>
        <img className={style.avatarMain} src={avatar}/>
        <h2>dr4inwyaw</h2>
        </div>
        <div>
        <input placeholder="Поделитесть вашей новостью" type='text' />
        <button>Добавить</button>
        </div>
      </div>
      <div className={style.news}>
        <div className={style.post}>
          <div className={style.avdiv}>
          <img src={avatar}/>
          <h3>dr4inwyaw</h3>
          </div>
          <p>напишите о себе</p>
        </div>
      </div>
    </div>
  );
}

export default Contant;
