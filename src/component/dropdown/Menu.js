import React, {useState} from 'react';
import { withRouter } from "react-router";
import CustomeDropDown  from '../customeDropDown/CustomeDropDown';
import "./Menu.css"

function Menu (props) {
    const [selected, setSelected] = useState(props.location.pathname.substring(1) || "");
    const handleClick = (event) => {
        props.history.push(event.target.value);
        setSelected(event.target.value);

    };

        return (
            <div className="menu_wrapper">
                <div className="customDropDownListContainer">
                    <CustomeDropDown {...props}/>
                </div>
            </div>
        );
}

export default withRouter(Menu);
// export default Menu;
