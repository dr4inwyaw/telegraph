import DialogItem from "./dialogItem/DialogItem.jsx"
import Messenge from "./messenge/Messenge.jsx"
import React from "react";
import style from "./dialog.module.css"

let addMesn = React.createRef()
let selectDialog = React.createRef()

function Dialog({data2,addMeseng2}) {
    console.log(data2)
    let addMeseng = () => {
        addMeseng2(addMesn.current.value,selectDialog.current.value)
        addMesn.current.value = ""
        selectDialog.current.value = ""
    }
    return (
        <div className={style.dialogs}>
            <div className={style.dialog}>
            {data2.map(i => <DialogItem key={i.id} name={i.name} id={i.id} textMes={i.text}/>)}
            </div>
            <div className={style.send}>
            <input ref={selectDialog} placeholder='Введите имя получателя' type="text"></input>
            <input ref={addMesn} placeholder='Введите сообщение' type="text"/>
            <button onClick={addMeseng}>отправить</button>
            
            </div>
        </div>
    );
};

export default Dialog;