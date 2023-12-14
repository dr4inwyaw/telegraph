import avatar1 from '../../img/7307566.jpg'
import style from './Friends.module.css'

function Friends ({name, img}) {
    return(
          <div className={style.friend}>
            <img src={img}/> 
            <p>{name}</p>
          </div>
    ) 
}

export default Friends;