import react from "react";
import "./style.scss";

import vector20 from "../../static/icons/Vector 20.svg";
import vector1 from "../../static/icons/Vector-1.svg";
import search from "../../static/icons/search.svg";
import phone from "../../static/icons/phone.svg";
import automation from "../../static/icons/noun_home automation_3256997 1.svg";
import whatsapp from "../../static/icons/la_whatsapp.svg";
import IonDom from "../../static/icons/Iон ом.svg";
import Group145 from "../../static/icons/Group 145.svg";
import Group96 from "../../static/icons/Group 96.svg";
import arrow15 from "../../static/icons/Arrow 15.svg";





function Header () {

    let [currentNavEl, setCurrentNavEl] = react.useState("Системы наблюдения");

    let nav_elements = [
        {
            title: "Системы наблюдения",
            categories: [
                {
                    title: "Типовые решения",
                    content: [
                        {title: "Для дома", url: "#"},
                        {title: "Для дачи", url: "#"},
                        {title: "В коттедж", url: "#"},
                        {title: "Для квартиры", url: "#"},
                        {title: "Для подъезда, лестницы", url: "#"},
                        {title: "в лифт", url: "#"}
                    ]
                },


                {
                    title: "Системные особенности",
                    content: [
                        {title: "Ip видеонаблюдение", url: "#"},
                        {title: "Видеонаблюдение через интернет", url: "#"},
                        {title: "Беспроводное видеонаблюдение", url: "#"},
                        {title: "Уличное видеонаблюдение", url: "#"},
                        {title: "Видеонаблюдение на расстоянии", url: "#"},
                        {title: "Автономная система видеонаблюдения", url: "#"}
                    ]
                },


                {
                    title: "Услуги и цены",
                    content: [
                        {title: "Проектирование", url: "#"},
                        {title: "Установка и монтаж", url: "#"},
                        {title: "Настройка", url: "#"},
                        {title: "Сервисное обслуживание", url: "#"},
                        {title: "Комплексные услуги", url: "#"},
                        {title: "Сервис Starthelp", url: "#"}
                    ]
                }
            ]
        },

        {
            title: "СКУД Домофон Шлагбаум",
            content: [],
        },

        {
            title: "Системы охранной сигнализации",
            content: []
        },

        {
            title: " Системы пожарной безопастности",
            content: []
        }
    ];


    function BottomNavItem(props) {
        // props.title
        // props.onClick

        return (
            <div className={props.title === currentNavEl ? "BottomNavItemSelected" : "BottomNavItem"} >
                {props.title}
            </div>
        );
    }


    return (
        <div>
            <header id="header_desktop">
                <img alt="фотография не загружена" id="header_logo" src={Group96}/>
                <div className="wrapper">
                    <div id="top_bar">
                        <img alt="фотография не загружена" id="header_logo_top_bar" src={Group96}/>
                        <div id="market_button">
                            <div className="menu_bar_container">
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                            Магазин
                        </div>
                        <div id="search_container">
                            <input id="search_field" placeholder="Что ищем ?" alt="иконка поиска"/>
                            <button id="search_btn">Найти</button>
                        </div>
                        <div className="basket_container">
                            <img alt="фотография не загружена" className="basket"
                                 src={vector20}/>
                            <div className="quantity_of_items">100</div>
                        </div>

                    </div>
                    <nav>
                        <a href="#">Умный дом</a> |
                        <a href="#">Системы безопасности</a> |
                        <a href="#">Интернет</a> |
                        <a href="#">Акции и скидки</a> |
                        <a href="#">Услуги и цены</a> |
                        <a href="#">Контакты</a> |
                        <a id="phone_number">
                            <img src={phone} alt="фотография не загружена"/>
                            <span>
                            <i>
                                8-499-444-33-54 (с 8 до 20)
                            </i>
                        </span>
                        </a>
                    </nav>
                    <div className={"bottomNav"}>
                        {nav_elements.map(el_data => <BottomNavItem title={el_data.title}/>)}
                    </div>
                </div>
            </header>


            <header id="header_mobile">
                <div className="top_bar">

                    <div className="left">
                        <div className="menu" onClick="manipulateHeaderMenu('site_menu')">
                            <div/>
                            <div/>
                            <div/>
                        </div>
                    </div>

                    <div className="middle">
                        <img alt="фотография не загрузилась" id="mobile_header_logo"
                             src={Group96}/>
                    </div>

                    <div className="right">
                        <div id="search_button_mobile">
                            <img alt="фотография не загрузилась" src={search}/>
                        </div>
                        <div className="basket_container">
                            <img alt="фотография не загрузилась" className="basket"
                                 src={vector20}/>
                            <div className="quantity_of_items">100</div>
                        </div>

                    </div>
                </div>
                <nav>
                    <div className="menu_bar_container">
                        <div/>
                        <div/>
                        <div/>
                    </div>
                    Магазин
                </nav>

                <div className="site_menu" id="site_menu">
                    <div className="row">
                        <img src={arrow15} alt="back" style={{marginRight: "10px"}}/>
                            <h3 className="selected">Системы безопасности</h3>
                    </div>

                    <div className="row">
                        <h3>Системы видеонаблюдения</h3>
                    </div>

                    <div className="row">
                        <h3>СКУД Домофоны Шлагбаум</h3>
                    </div>

                    <div className="row">
                        <h3>Системы охранной сигнализации</h3>
                    </div>

                    <div className="row">
                        <h3>Системы пожарной безопасности</h3>
                    </div>

                </div>
            </header>

        </div>
    );
}

export {Header};