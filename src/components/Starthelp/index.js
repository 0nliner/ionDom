import react from "react";
import startHelpIm from "../../static/icons/starthelp.svg";
import {NamedSection} from "../NamedSection";

import "./style.scss";


function Starthelp (props) {
    return (
        <NamedSection >
            <div className={"starthelp"}>
                <h2 className={"title"}>
                    Сервис <a className={"name"}>Starthelp</a> для <br/>
                    видеонаблюдения
                </h2>

                <div className={"content_holder"}>
                    <ul className={"text"}>
                        <li>Доставка по Москве и МО Бесплатно</li>
                        <li>Выезд инженера бесплатно</li>
                        <li>Настройка комплекта включая удалённый просмотр Бесплатно</li>
                        <li>Первичная проверка на брак Бесплатно</li>
                        <li>Пакет документов от "ИонДом" Бесплатно</li>

                        <button>
                            Узнать подробнее
                        </button>
                    </ul>
                    <img src={startHelpIm} alt={"starthelp сервис"}/>
                </div>
            </div>
        </NamedSection>
    );
}

export {Starthelp};