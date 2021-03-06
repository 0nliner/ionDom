import react from "react";
import "./style.scss";


function Dropdown (props) {
    // props.children - children components
    // props.onClick - onClick event

    return (
        <div className={"dropdown"} onClick={props.onClick}>
            {props.title}
        </div>
    );
}

function DropdownContent (props) {
    // props.children
    // show - true or false. State
    let component = props.show ? (
        <div className={"dropdown_content"}>
            {props.children}
        </div>
    ) : null;

    return component;

}

function Selectable (props) {
    // props.text - text of the element

    return (
        <div className={"selectable"}>
            {props.text}
        </div>
    );
}

function DropdownBlock (props) {
    // props.title - тайтл для dropdown

    let [displayInnerContent, setDisplayInnerContent] = react.useState(false);

    return (
        <div className={"dropdown_block"}>
            <Dropdown title={props.title}  onClick={() => setDisplayInnerContent(!displayInnerContent)}/>

            <DropdownContent show={displayInnerContent}>
                {props.children}
            </DropdownContent>
        </div>
    );
}


function Nav (props) {
    return (
        <div id={"right_nav"}>
            <div className={"logo"}>
            </div>
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