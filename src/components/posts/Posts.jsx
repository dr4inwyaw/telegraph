import style from './posts.module.css'
import Post from './post/Post';
import avatar1 from '../../img/7300000.jpg'

function Posts() {
    return (
        <div>
             <div className={style.add}>
                <input placeholder="Поделитесть вашей новостью" type='text' />
                 <button>Добавить</button>
             </div>
             <div className={style.news}>
                <Post name="dr4in" text="test" img={avatar1} />
                <Post/>
                <Post/>
                </div>
        </div>
    );
}; 

export default Posts;