import react from "react";
import {DropdownBlock, Selectable} from "../Dropdowns";

import "./style.scss";

import logo from "../../static/icons/Group 145.svg";
import component5 from "../../static/icons/Component 5.svg";
import insta from "../../static/icons/carbon_logo-instagram.svg";
import vk from "../../static/icons/bx_bxl-vk.svg";
import whatsapp from "../../static/icons/la_whatsapp.svg";
import telegram from "../../static/icons/cib_telegram-plane.svg";


function Footer (props) {
    return (
        <footer>
            <div className="wrapper">
                <img id="footer_logo" alt="фотография не загружена" src={logo}/>
                    <div className="cols">
                        <DropdownBlock title={<h2>Услуги</h2>} className="col">
                            <Selectable text={"privet"}/>
                        </DropdownBlock>


                        <DropdownBlock className="col" title={<h2>Товары</h2>} id="products">
                            <Selectable text={"privet"}/>
                        </DropdownBlock>

                        <DropdownBlock className="col" title={<h2>Товары</h2>} id="menu">
                            <Selectable text={"privet"}/>
                        </DropdownBlock>


                        <div className="col" id="contacts">
                            <h2>Наши контакты</h2>
                            <div id="social_networks">
                                <img alt="фотография не загружена" src={insta}/>
                                <img alt="фотография не загружена" src={telegram}/>
                                <img alt="фотография не загружена" src={whatsapp}/>
                                <img alt="фотография не загружена" src={vk}/>
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
                                <img alt="фотография не загружена" src={component5}/>
                            </div>
                        </div>
                    </div>
            </div>
        </footer>
    );
}


export {Footer};