import avatar1 from './../img/7300000.jpg'
import render3 from '../index.js'

let state = { 
    dialog: {
        dialogName: [{name:"Илон Маск", id: "0", text:"как дела?"},
        {name:"Иванов Иван", id: "1", text:"чем занимаешься?"},
        {name: "Максимов Максим", id: "2", text:"как настроение?"},],
        dialogMes: [{text:"как дела?"},
        {text:"чем занимаешься?"},
        {text:"как настроение?"} ]
    },
    post: {
        postsName: [{ name:"Илон Маск", text:"X-twitter",  img: avatar1, like:'1'},
        { name:"Иванов Иван", text:"Оцените мою новость",  img: avatar1, like:'2' },
        { name:"Максимов Максим", text:"купил новую машину", img: avatar1, like:'3'},]
    },
    
    navbar: {
        friends: [{ name:"Илон Маск", img: avatar1 },
        { name:"Иванов Иван", img: avatar1 }, 
        { name:"Максимов Максим", img: avatar1}]
    }
}

export let addPost = (postText) => {
    let newPost = {
        text: postText, id: 4, likes: 1 
    }
    state.post.postsName.push(newPost)
    console.log(state)
}

export let addMeseng = (MesengeText) => {
    let newMes = {
        text: MesengeText
    }
    state.dialog.dialogMes.push(newMes)
    console.log(state)
    render3() 
}

export default state;