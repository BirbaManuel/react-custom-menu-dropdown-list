import React, {useState} from 'react';
import { withRouter } from "react-router";
import CustomeDropDown  from '../customeDropDown/CustomeDropDown';
import "./Menu.css"

function Menu (props) {
    // console.log(props)
    const [selected, setSelected] = useState(props.location.pathname.substring(1) || "");
    // const [selected, setSelected] = useState(props.location.pathname.substring(1) || "");

    const handleClick = (event) => {
        props.history.push(event.target.value);
        // props.history.push("MANUELBIRBA");
        setSelected(event.target.value);

    };

        return (
            <div className="menu_wrapper">
                <select className="componentMenu_market_select" id="rubrique" value={selected} onChange={handleClick}>
                        <option id="selected" value="/">Choisir un marché</option>
                        <optgroup label="Trafic global">
                            <option value="/">Global</option>
                        </optgroup>

                        <optgroup label="Marchés">
                            <option value="particulier">Particulier</option>
                            <option value="professionnel">Professionnel</option>
                            <option value="bp">Banque-privée</option>
                            <option value="agriculteur">Agriculteur</option>
                            <option value="association">Association</option>
                            <option value="collPub">Collectivités publiques</option>
                            <option value="entreprise">Entreprise</option>
                        </optgroup>

                        <optgroup label="Focus">
                            <option value="assurance">Focus Assurance</option>
                            <option value="epargne">Focus Epargne</option>
                            <option value="credits">Focus Crédits</option>
                        </optgroup>

                        <optgroup label="Filiales">
                            <option value="nexecur">Nexecur</option>
                            <option value="amundi">Amundi</option>
                            <option value="unimedia">Uni-médias</option>
                        </optgroup>
                </select>
                <div className="customDropDownListContainer">
                    {/* <div>custom dropdown list</div> */}
                    <CustomeDropDown {...props}/>
                </div>
            </div>
        );
}

export default withRouter(Menu);
// export default Menu;
