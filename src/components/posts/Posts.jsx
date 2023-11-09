import style from './posts.module.css'
import Post from './post/Post';

function Posts({data}) {
    return (
        <div>
             <div className={style.add}>
                <input placeholder="Поделитесть вашей новостью" type='text' />
                 <button>Добавить</button>
             </div>
             <div className={style.news}>
                {data.map(i => <Post name={i.name} text={i.text} img={i.img} like={i.like} /> )}
                </div>
        </div>
    );
}; 

export default Posts;