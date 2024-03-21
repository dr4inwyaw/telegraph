import style from './contant.module.css'
import avatar from '../../img/7307566.jpg'
import Posts from '../posts/Posts.jsx';

function Contant({data,addPost,postChange}) {
  return (
    <div className={`${style.contant} contant`}>
      <div className={style.user}>
        <div>
        <img className={style.avatarMain} src={avatar}/>
        <h2>dr4inwyaw</h2>
        </div>
      </div>
      <Posts data={data} addPost2={addPost} postChange={postChange}/>
    </div>
  );
}

export default Contant;
