import React, { useState, useEffect } from 'react';
import "./Menu.css"

function Menu (props) {
    const [selected,setSelected] = useState(props.location.pathname.substring(1) || "");

    const handleClick = (event) => {
        const path = event.target.value
        props.history.push(path);
        console.log(path)
        setSelected(path);

    };
    return (
        <div className="select-box">
            <div className="select-box__current remove-select-default-style" value={selected} tabIndex="1" onChange={handleClick}>
                <div className="select-box__value">
                    <input className="select-box__input" type="radio" id="global" value="/" name="Ben" defaultChecked="checked"/>
                    <p className="select-box__input-text">Global</p>
                </div>
                <div className="select-box__value">
                    <input className="select-box__input" type="radio" id="Particulier" value="Particulier" name="Ben"/>
                    <p className="select-box__input-text">Particulier</p>
                </div>
                <div className="select-box__value">
                    <input className="select-box__input" type="radio" id="Professionnel" value="Professionnel" name="Ben"/>
                    <p className="select-box__input-text">Professionnel</p>
                </div>
                <div className="select-box__value">
                    <input className="select-box__input" type="radio" id="bp" value="bp" name="Ben"/>
                    <p className="select-box__input-text">Banque-privée</p>
                </div>
                <div className="select-box__value">
                    <input className="select-box__input" type="radio" id="agriculteur" value="agriculteur" name="Ben"/>
                    <p className="select-box__input-text">agriculteur</p>
                </div>
                <div className="select-box__value">
                    <input className="select-box__input" type="radio" id="association" value="association" name="Ben"/>
                    <p className="select-box__input-text">association</p>
                </div>
                <div className="select-box__value">
                    <input className="select-box__input" type="radio" id="collPub" value="collPub" name="Ben"/>
                    <p className="select-box__input-text">Collectivités publiques</p>
                {/* </div><img className="select-box__icon"  src="http://cdn.onlinewebfonts.com/svg/img_295694.svg" alt="Arrow Icon" aria-hidden="true"/> */}
                </div>
                <div className="select-box__value">
                    <input className="select-box__input" type="radio" id="Entreprise" value="Entreprise" name="Ben"/>
                    <p className="select-box__input-text">Entreprise</p>
                </div>
                <div className="select-box__value">
                    <input className="select-box__input" type="radio" id="assurance" value="assurance" name="Ben"/>
                    <p className="select-box__input-text">Focus Assurance</p>
                </div>
                <div className="select-box__value">
                    <input className="select-box__input" type="radio" id="epargne" value="epargne" name="Ben"/>
                    <p className="select-box__input-text">Focus Epargne</p>
                </div>
                <div className="select-box__value">
                    <input className="select-box__input" type="radio" id="credits" value="credits" name="Ben"/>
                    <p className="select-box__input-text">Focus Credits</p>
                </div>
                <div className="select-box__value">
                    <input className="select-box__input" type="radio" id="nexecur" value="nexecur" name="Ben"/>
                    <p className="select-box__input-text">Nexecur</p>
                </div>
                <div className="select-box__value">
                    <input className="select-box__input" type="radio" id="amundi" value="amundi" name="Ben"/>
                    <p className="select-box__input-text">Amundi</p>
                </div>
                <div className="select-box__value">
                    <input className="select-box__input" type="radio" id="unimedia" value="unimedia" name="Ben"/>
                    <p className="select-box__input-text">Unimedia</p>
                </div>
            </div>
            {/* <div className="top-list">test</div> */}
            <div className="select-box__list wrapper_ul_dropdownlist">
                <ul className="ul_dropdownlist_displayed">
                <li className="li_dropdownlist_displayed">
                    <label className="select-box__option">| Trafic Global</label>
                    <ul>
                        <li>
                            <label className="select-box__option" htmlFor="global" aria-hidden={true}>Global</label>
                        </li>
                    </ul>
                </li>
                <li className="li_dropdownlist_displayed">
                    <label className="select-box__option">| Marchés</label>
                    <ul>
                        <li>
                            <label className="select-box__option" htmlFor="Particulier" aria-hidden={true}>Particuliers</label>
                        </li>
                        <li>
                            <label className="select-box__option" htmlFor="Professionnel" aria-hidden={true}>Professionels</label>
                        </li>
                        <li>
                            <label className="select-box__option" htmlFor="bp" aria-hidden={true}>Banque-privée</label>
                        </li>
                        <li>
                            <label className="select-box__option" htmlFor="agriculteur" aria-hidden={true}>Agriculteur</label>
                        </li>
                        <li>
                            <label className="select-box__option" htmlFor="association" aria-hidden={true}>Association</label>
                        </li>
                        <li>
                            <label className="select-box__option" htmlFor="collPub" aria-hidden={true}>Collectivités publiques</label>
                        </li>
                        <li>
                            <label className="select-box__option" htmlFor="Entreprise" aria-hidden={true}>Entreprise</label>
                        </li>
                    </ul>
                </li>
                <li className="li_dropdownlist_displayed">
                    <label className="select-box__option">| Focus</label>
                    <ul >
                        <li>
                            <label className="select-box__option" htmlFor="assurance" aria-hidden={true}>Assurance</label>
                        </li>
                        <li>
                            <label className="select-box__option" htmlFor="epargne" aria-hidden={true}>Epargne</label>
                        </li>
                        <li>
                            <label className="select-box__option" htmlFor="credits" aria-hidden={true}>Crédits</label>
                        </li>
                    </ul>
                </li>
                <li className="li_dropdownlist_displayed">
                    <label className="select-box__option">| Filiales</label>
                    <ul>
                        <li>
                            <label className="select-box__option" htmlFor="nexecur" aria-hidden={true}>Nexecur</label>
                        </li>
                        <li>
                            <label className="select-box__option" htmlFor="amundi" aria-hidden={true}>Amundi</label>
                        </li>
                        <li>
                            <label className="select-box__option" htmlFor="unimedia" aria-hidden={true}>Uni-Médias</label>
                        </li>
                    </ul>
                </li>
            </ul>
            <div id="triangle_top_list_menu"/>
            </div>
        </div>
        )
}

export default Menu
