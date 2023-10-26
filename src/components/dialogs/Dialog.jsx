import DialogItem from "./dialogItem/DialogItem.jsx"
import Messenge from "./messenge/Messenge.jsx"
import React from "react";
import style from "./dialog.module.css"
let dialogName = [{name:"Илон Маск", id: "0" },
                 {name:"Иванов Иван", id: "1" },
                 {name: "Максимов Максим", id: "2" }]
let dialogMes = [{text:"как дела?"},
                 {text:"чем занимаешься?"},
                 {text:"как настроение?"}]

function Dialog() {
    return (
        <div className={style.dialogs}>
            <div className={style.dialog}>
            {/* <DialogItem name={dialogName[0].name} id={dialogName[0].id}/> ||| <DialogItem name={dialogName[1].name} id={dialogName[1].id} /> ||| <DialogItem name={dialogName[2].name} id={dialogName[2].id} /> */}
            {dialogName.map(i => <DialogItem name={i.name} id={i.id}/>)}
            </div>
            <div className={style.mess}>
                                {/* <Messenge textMes={dialogMes[0].text}/> ||| <Messenge textMes={dialogMes[1].text}/> ||| <Messenge textMes={dialogMes[2].text}/>  */}
            {dialogMes.map(tm => <Messenge textMes={tm.text}/>)}
            </div>
            <div className={style.send}>
            <input type="text"/>
            <button>отправить</button>
            </div>
        </div>
    );
};

export default Dialog;