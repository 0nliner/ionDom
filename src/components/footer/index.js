import react from "react";
import {DropdownBlock, Selectable} from "../Dropdowns";

import "./style.scss";
import logo from "../../static/icons/Group 145.svg";

function Footer (props) {


    return (
        <footer>
            <div className="wrapper">
                <img id="footer_logo" alt="фотография не загружена" src={logo}/>
                    <div className="cols">
                        <DropdownBlock className="col" title={"Услуги"} className="top_bar">
                            <Selectable text={"privet"}/>
                        </DropdownBlock>


                        <DropdownBlock className="col" title={"Товары"} id="products">
                            <Selectable text={"privet"}/>
                        </DropdownBlock>

                        <DropdownBlock className="col" title={"Товары"} id="menu">
                            <Selectable text={"privet"}/>
                        </DropdownBlock>


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
                            <label id="sub" style={{
                                fontSize: "26px",
                                marginTop: "40px",
                                textAlign: "center"}}>
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