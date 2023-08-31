import avatar from '../../../img/7307566.jpg'
import style from './posts.module.css'

function Post({name,text,img}) {
    return (
        <div className={style.post}>
        <div className={style.avdiv}>
            <img src={img}/>
           <h3>{name}</h3>
        </div>
          <p>{text}</p>
      </div>
    );
};

export default Post;