import avatar from '../../../img/7307566.jpg'
import ser from '../../../img/ser.png'
import style from './posts.module.css'


function Post({name,text,img,like}) {
    return (
        <div className={style.post}>
        <div className={style.avdiv}>
            <img src={img}/>
           <h3>{name}</h3>
        </div>
          <p>{text}</p>
          <p><img className={style.serd} src={ser}/> {like} like</p>
      </div>
    );
};

export default Post;