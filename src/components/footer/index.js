import react from "react";
// import {DropdownBlocks} from "../Dropdowns";

import "./style.scss";


function Footer (props) {

    const manipulateContentFooter = (id) => {
        // закрывает и открывает содержимое блока с
        // контентом в footer при нажатии на
        // соответствующий компонент
        const container = document.getElementById(id);
        const arrow_image = container.getElementsByClassName("arrow")[0];
        const content_block = container.getElementsByClassName("content")[0];
        let is_opened = content_block.style.display !== "none";

        if (is_opened) {
            content_block.style.display = "none";
            arrow_image.style.transform = "none";
        }

        else {
            content_block.style.display = "grid";
            arrow_image.style.transform = "rotate(180deg)";
        }
    }

    return (
        <footer>
            <div className="wrapper">
                <img id="footer_logo" alt="фотография не загружена" src="static/icons/Group%20145.svg"/>
                    <div className="cols">
                        <div className="col" id="services">
                            <div className="top_bar" onClick={manipulateContentFooter('services')}>
                                <h2>Услуги</h2>
                                <img className="arrow" alt="стрелка вниз" src="./static/icons/Arrow%2040.svg"/>
                            </div>

                            <div className="content">
                                demo content
                                <div>privet</div>
                            </div>
                        </div>

                        <div className="col" id="products">
                            <div className="top_bar" onClick={manipulateContentFooter('products')}>
                                <h2>Товары</h2>
                                <img className="arrow" alt="стрелка вниз" src="./static/icons/Arrow%2040.svg"/>
                            </div>

                            <div className="content">
                                demo content
                                <div>privet</div>
                            </div>
                        </div>

                        <div className="col" id="menu">
                            <div className="top_bar" onClick={manipulateContentFooter('menu')}>
                                <h2>Меню</h2>
                                <img className="arrow" alt="стрелка вниз" src="./static/icons/Arrow%2040.svg"/>
                            </div>
                            <div className="content">
                                demo content
                                <div>privet</div>
                            </div>
                        </div>

                        <div className="col" id="contacts">
                            <h2>Наши контакты</h2>
                            <div id="social_networks">
                                <img alt="фотография не загружена" src="static/icons/carbon_logo-instagram.svg"/>
                                <img alt="фотография не загружена" src="static/icons/cib_telegram-plane.svg"/>
                                <img alt="фотография не загружена" src="static/icons/la_whatsapp.svg"/>
                                <img alt="фотография не загружена" src="static/icons/bx_bxl-vk.svg"/>
                            </div>
                        </div>


                        <div className="col" id="notification">
                            <label id="sub" style="font-size: 26px;
                                               margin-top:40px;
                                               text-align: center">
                                Будь всегда в курсе
                            </label>

                            <div id="notification_subscription">
                                <input htmlFor="sub" placeholder="Ваш Email"/>
                                <img alt="фотография не загружена" src="static/icons/Component%205.svg"/>
                            </div>
                        </div>
                    </div>
            </div>
        </footer>
    );
}


export {Footer};