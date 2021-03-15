import react from "react";

import "./style.scss";
import {HiContrastDropDown} from "../Dropdowns";


function CitySelector (props) {
    let [currentCity, setCurrentCity] = react.useState("Москва");
    let cities = ["Москва", "Санкт-Перетбург", "Воронеж", "Чернобыль",
                  "Москва", "Санкт-Перетбург", "Воронеж", "Чернобыль"];

    function City(props) {
        // props.title
        return (
            <div className={"city"} onClick={()=>{setCurrentCity(props.title)}}>
                {props.title}
            </div>
        );
    }

    return (
        <div className={"CitySelector"}>
            <div className={"CitySelectorWrapper"}>
                Установка видеонаблюдения под ключ в {currentCity}

                <HiContrastDropDown title={"Выбрать город"} addclass={"menuButton"}>
                    <div className={"dropdown_content"} onClick={()=> {
                        console.log(1)
                    }}>
                        {cities.map(el => <City title={el} />)}

                    </div>
                </HiContrastDropDown>

                Или Starthelp "начальная помощь" в подарок <a href={"#"}>подробно</a>
            </div>
        </div>
    );
}

export {CitySelector};