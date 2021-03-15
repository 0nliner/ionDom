import react from 'react';
import "./style.scss";

// import {NamedSection} from "../NamedSection";

import cam_logo from "../../static/013-cctv-2.svg";
import net_logo from "../../static/004-internet-3.svg";
import camera_logo from "../../static/016-cctv-5.svg";
import router_logo from "../../static/017-modem-1.svg";
import remote_cam_logo from "../../static/020-cctv.svg";
import panel_logo from "../../static/solar-panel 1.svg";
import {NamedSection} from "../NamedSection";



function Card (props) {
    // props.url
    // props.title

    return (
        <div className={"card"}>
            <img src={props.url}/>
            <div className={"title"}>
                <strong>
                    {props.title}
                </strong>
            </div>
        </div>
    );
}

function Cards (props) {
    // props.children - карточки
    // props.text - текст после карточек
    // props.title - title

    return (
        <NamedSection>
            <div className={"cards_block"}>
                <h2>{props.title}</h2>

                <div className={"cards_content"}>
                    {props.children}
                </div>

                <div className={"after_text"}>
                    {props.text}
                </div>
            </div>
        </NamedSection>
    );
}


function SetupCards (props) {
    const title = "Установка функциональных систем видеонаблюдения под ключ";
    const text = "Душа моя озарена неземной радостью, как эти чудесные весенние утра, которыми я наслаждаюсь от всего сердца. Я совсем один и блаженствую в здешнем краю, словно созданном для таких, как я. Я так счастлив, мой друг, так упоен ощущением покоя, что искусство мое страдает от этого. Ни одного штриха не мог бы я сделать, а никогда не был таким большим художником, как в эти минуты. Когда от милой моей долины поднимается пар и полдневное солнце стоит над непроницаемой чащей темного леса и лишь редкий луч.";

    return (
        <Cards title={title} text={text}>
            <Card title={"IP видеонаблюдение"} url={cam_logo}/>
            <Card title={"Видеонаблюдение через интернет"} url={net_logo}/>
            <Card title={"Беспроводное видеонаблюдение"} url={router_logo}/>
            <Card title={"Уличное видеонаблюдение"} url={camera_logo}/>
            <Card title={"Автономная система видеонаблюдения"} url={panel_logo}/>
            <Card title={"Видеонаблюдения на расстоянии"} url={remote_cam_logo}/>
        </Cards>
    );
}

export {SetupCards};