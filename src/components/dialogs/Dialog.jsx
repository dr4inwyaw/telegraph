import DialogItem from "./dialogItem/DialogItem.jsx"
import Messenge from "./messenge/Messenge.jsx"
import React from "react";
import style from "./dialog.module.css"

let addMesn = React.createRef()

function Dialog({data2,addMeseng2}) {
    let addMeseng = () => {
        addMeseng2(addMesn.current.value)
    }
    return (
        <div className={style.dialogs}>
            <div className={style.dialog}>
            {/* <DialogItem name={dialogName[0].name} id={dialogName[0].id}/> ||| <DialogItem name={dialogName[1].name} id={dialogName[1].id} /> ||| <DialogItem name={dialogName[2].name} id={dialogName[2].id} /> */}
            {data2.map(i => <DialogItem key={i.id} name={i.name} id={i.id} textMes={i.text}/>)}
            </div>
            <div className={style.send}>
            <input ref={addMesn} type="text"/>
            <button onClick={addMeseng}>отправить</button>
            
            </div>
        </div>
    );
};

export default Dialog;