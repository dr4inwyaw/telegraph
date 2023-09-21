import { NavLink } from 'react-router-dom';
function DialogItem({name,id}) {
    return (
        <div>
            <NavLink to={`/dialogs/${id}`}>
                {name}
            </NavLink>
        </div>
    )
}

export default DialogItem;