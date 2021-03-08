import react from "react";

import "./style.scss";
import {DropdownBlock, Selectable} from "../Dropdowns";
import logo from "../../static/icons/IonDom.svg";


function Nav (props) {
    return (
        <div id={"right_nav"}>
            {/*<div className={"logo"}>*/}
            <img className={"logo"} src={logo} alt={"иондом"}/>
            {/*</div>*/}
            <div className={"content"}>

                <DropdownBlock title={"Типовые решения"}>
                    <Selectable text={"Для дома"}/>
                    <Selectable text={"Для дачи"}/>
                    <Selectable text={"В коттедж"}/>
                    <Selectable text={"Для квартиры"}/>
                    <Selectable text={"Для квартиры"}/>
                    <Selectable text={"Для подъезда, лестницы"}/>
                    <Selectable text={"В лифт"}/>
                </DropdownBlock>


                <DropdownBlock title={"Системные особенности"}>
                    <Selectable text={"Ip видеонаблюдение"}/>
                    <Selectable text={"Видеонаблюдение через интернет"}/>
                    <Selectable text={"Беспроводное видеонаблюдение"}/>
                    <Selectable text={"Уличное видеонаблюдение"}/>
                    <Selectable text={"Видеонаблюдение на расстоянии"}/>
                    <Selectable text={"Автономная система видеонаблюдения"}/>
                </DropdownBlock>


                <DropdownBlock title={"Услуги и цены"}>
                    <Selectable text={"Проектирование"}/>
                    <Selectable text={"Установка и монтаж"}/>
                    <Selectable text={"Настройка"}/>
                    <Selectable text={"Сервисное обслуживание"}/>
                    <Selectable text={"Комплексные услуги"}/>
                    <Selectable text={"Сервис StartHelp"}/>
                </DropdownBlock>
            </div>
        </div>
    );
}


export {Nav};