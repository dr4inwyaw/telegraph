import DialogItem from "./dialogItem/DialogItem.jsx"
import Messenge from "./messenge/Messenge.jsx"
import React from "react";
function Dialog() {
    return (
        <div className="dialogs">
            <div className="dialog">
            <DialogItem name="Илон маск" id="0" />
            <DialogItem name="Иванов Иван" id="1" />
            <DialogItem name="Максимов Максим" id="2" />
            </div>
            <div className="mess">
                <Messenge textMes="как дела?"/> 
                <Messenge textMes="чем занимаешься?"/> 
                <Messenge textMes="как настроение?"/> 
            </div>
            <div className="send">
            <input type="text"/>
            <button>отправить</button>
            </div>
        </div>
    );
};

export default Dialog;