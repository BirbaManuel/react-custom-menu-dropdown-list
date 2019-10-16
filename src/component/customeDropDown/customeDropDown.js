import React, {useState} from 'react';
import "./customeDropDown.css"

function Welcome (props) {
    const [selected,setSelected] = useState(props.location.pathname.substring(1) || "");

    const handleClick = (event) => {
        const path = event.target.value
        props.history.push(path);
        console.log(path)
        setSelected(path);

    };
    return (
        <div className="select-box">
            <select className="select-box__current" tabIndex="1" value={selected} onChange={handleClick}>
                <div className="select-box__value">
                    <input className="select-box__input" type="radio" id="0" value="/" name="Ben" defaultChecked="checked"/>
                    <p className="select-box__input-text">Particulier</p>
                </div>
                <div className="select-box__value">
                    <input className="select-box__input" type="radio" id="1" value="bp" name="Ben"/>
                    <p className="select-box__input-text">Banque-privée</p>
                </div>
                <div className="select-box__value">
                    <input className="select-box__input" type="radio" id="2" value="agriculteur" name="Ben"/>
                    <p className="select-box__input-text">agriculteur</p>
                </div>
                <div className="select-box__value">
                <input className="select-box__input" type="radio" id="3" value="association" name="Ben"/>
                    <p className="select-box__input-text">association</p>
                    </div>
                <div className="select-box__value">
                    <input className="select-box__input" type="radio" id="4" value="collPub" name="Ben"/>
                    <p className="select-box__input-text">Collectivités publiques</p>
                </div><img className="select-box__icon" src="http://cdn.onlinewebfonts.com/svg/img_295694.svg" alt="Arrow Icon" aria-hidden="true"/>
                <div className="select-box__value">
                    <input className="select-box__input" type="radio" id="5" value="Entreprise" name="Ben"/>
                    <p className="select-box__input-text">Entreprise</p>
                </div><img className="select-box__icon" src="http://cdn.onlinewebfonts.com/svg/img_295694.svg" alt="Arrow Icon" aria-hidden="true"/>
            </select>
            <ul className="select-box__list wrapper_ul_dropdownlist">
                <li>
                <label className="select-box__option" htmlFor="0" aria-hidden={true}>Global</label>
                </li>
                <li>
                <label className="select-box__option" htmlFor="1" aria-hidden={true}>Banque-privée</label>
                </li>
                <li>
                <label className="select-box__option" htmlFor="2" aria-hidden={true}>Agriculteur</label>
                </li>
                <li>
                <label className="select-box__option" htmlFor="3" aria-hidden={true}>Association</label>
                </li>
                <li>
                <label className="select-box__option" htmlFor="4" aria-hidden={true}>Collectivités publiques</label>
                </li>
                <li>
                <label className="select-box__option" htmlFor="5" aria-hidden={true}>Entreprise</label>
                </li>
            </ul>
        </div>
        )
}

export default Welcome
