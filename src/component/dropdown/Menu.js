import React from 'react';
import { withRouter } from "react-router";
import CustomeDropDown  from '../customeDropDown/CustomeDropDown';
import "./Menu.css"

function Menu (props) {
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
