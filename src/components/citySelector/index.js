import react from "react";

import "./style.scss";
import {HiContrastDropDown} from "../Dropdowns";


function CitySelector (props) {
    let [currentCity, setCurrentCity] = react.useState()
    return (
        <div className={"CitySelector"}>
            <div className={"CitySelectorWrapper"}>
                Установка видеонаблюдения под ключ в {currentCity} <HiContrastDropDown title={"Выбрать город"}/>
                Или Starthelp "начальная помощь" в подарок <a href={"#"}>подробно</a>
            </div>
        </div>
    );
}

export {CitySelector};