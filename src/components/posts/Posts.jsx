import React from 'react';
import style from './posts.module.css'
import Post from './post/Post';

let postText = React.createRef()
let postName = React.createRef()

function Posts({data,addPost2}) {
    let addPost = () => {
        addPost2(postText.current.value,postName.current.value)
    }
    return (
        <div>
             <div className={style.add}>.
                <input ref={postName} placeholder='Введите ваше имя' type='text'></input>
                <input ref={postText} placeholder="Поделитесть вашей новостью" type='text' />
                 <button onClick={addPost}>Добавить</button>
             </div>
             <div className={style.news}>
                {data.map((i,inx) => <Post key={inx} name={i.name} text={i.text} img={i.img} like={i.like} /> )}
                </div>
        </div>
    );
}; 

export default Posts;