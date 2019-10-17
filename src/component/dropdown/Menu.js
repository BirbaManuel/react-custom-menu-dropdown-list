import React from 'react';
import { withRouter } from "react-router";
import "./Menu.css"
import CustomDropDown from "../customDropDown/customDropDown";

function Menu (props) {
        return (
            <div className="menu_wrapper">
                <div className="customDropDownListContainer">
                    <CustomDropDown {...props}/>
                </div>
            </div>
        );
}

export default withRouter(Menu);
// export default Menu;
