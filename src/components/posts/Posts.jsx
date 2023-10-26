import style from './posts.module.css'
import Post from './post/Post';
import avatar1 from '../../img/7300000.jpg'

let postsName = [{ name:"Илон Маск", text:"X-twitter",  img: avatar1 },
                 { name:"Иванов Иван", text:"Оцените мою новость",  img: avatar1},
                 { name:"Максимов Максим", text:"купил новую машину", img: avatar1},]

function Posts() {
    return (
        <div>
             <div className={style.add}>
                <input placeholder="Поделитесть вашей новостью" type='text' />
                 <button>Добавить</button>
             </div>
             <div className={style.news}>
                {postsName.map(i => <Post name={i.name} text={i.text} img={i.img}   /> )}
                </div>
        </div>
    );
}; 

export default Posts;