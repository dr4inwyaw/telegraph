import style from "./DialogItem.module.css"
import { NavLink } from 'react-router-dom';
function DialogItem({name,id,textMes}) {
    return (
        <div className={style.dialogmes}>
            <NavLink className={style.dialogName} to={`/dialogs/${id}`}>
                {name}
            </NavLink>
            <p className={style.TextDes}>{textMes}</p>
        </div>
    )
}

export default DialogItem;