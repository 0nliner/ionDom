import react from "react";
import "./style.scss";

import check from "../../static/Vector.svg";
import {InlineSelectChoises, NamedDropdownBlock, Selectable} from "../Dropdowns";
import { v4 as uuidv4 } from 'uuid';


function CheckPoint (props) {
    // props.state : true or false
    // props.onClick
    return (
        <div className={"checkPoint"} onClick={() => props.onClick(!props.state)}>
            {props.state ? <img src={check}/> : null }
        </div>
    );
}



function NamedCheckBox (props) {
    // props.title
    // props.state
    // props,onClick
    return (
        <div className={"namedCheckBox"}>
            <div className={"title"}>
                {props.title}
            </div>

            <div className={"checkPointWrapper"}>
                <CheckPoint state={props.state} onClick={props.onClick}/>
            </div>
        </div>
    );
}


function DeliveryCalc (props) {

    function Block(props) {
        // props.classname
        // props.title
        // props.children
        return (
            <div className={"content_block_wrapper"}>
                <div className={"content_block " + props.className}>
                    <h3>{props.title}</h3>
                    <div className={"content"}>
                        {props.children}
                    </div>
                </div>
            </div>
        );
    }

    // данные для первого инфо блока
    let [setup, setSetup] = react.useState(false);
    let [service, setService] = react.useState(false);
    let [kit, setKit] = react.useState(false);

    let [remoteView, setRemoteView] = react.useState(false);
    let [internet, setInternet] = react.useState(false);
    let [cloudStorage, setCloudStorage] = react.useState(false);

    let cams_choises = ["Full HD", "3K", "5K"];
    let [current_cam_choice, setCurrentCamChoice] = react.useState(0);
    let cams_choises_objects = [];

    let [quantityRecDays, setQuantityRecDays] = react.useState(null);
    let [quantityMicro, setQuantityMicro] = react.useState(null);


    function InlineChoiceSelectable (props) {
        // props.title
        return (
            <div className={"choice"}
                 style={{color: current_cam_choice === props.title ? "#6F1FBF" : "#224156"}}
                 onClick={() => setCurrentCamChoice(props.title)}>
                {props.title}
            </div>
        );
    }

    function InlineInputChange (props) {
        // props.title
        // props.setState
        // props.placeholder
        // props.state
        // props.inp_key

        // console.log(props.inp_key);
        return (
            <div className={"InlineInputChange"}>
                <div className={"title"}>{props.title}</div>

                <div className={"inputWrapper"}>
                    <input key={props.inp_key} placeholder={props.placeholder} value={props.state} onChange={(e)=>props.setState(e.target.value)}/>
                </div>
            </div>
        );
    }


    for (let choice of cams_choises) {
        cams_choises_objects = cams_choises_objects.concat(<InlineChoiceSelectable title={choice}/>)
    }

    return (
        <div className={"delivery_calc"}>

            {/* сервисы */}

            <Block className={"services"} title={"Сервисы"}>
                <div className={"checkpoints"}>

                    <NamedCheckBox title={"Установка и монтаж"}
                                   state={setup}
                                   onClick={setSetup}/>

                    <NamedCheckBox title={"Сервис Starthelp"}
                                   state={service}
                                   onClick={setService}/>

                    <NamedCheckBox title={"Комплект оборудования для самостоятельной установки"}
                                   state={kit}
                                   onClick={setKit}/>
                </div>
            </Block>

            {/* Особеннности */}

            <Block className={"special"} title={"Особенности"}>

                <div className={"col1"}>
                    <strong>*Тип объекта</strong>
                    <NamedDropdownBlock>
                        <Selectable text={"test"}/>
                        <Selectable text={"test"}/>
                    </NamedDropdownBlock>

                    <strong>*IP + A</strong>
                    <NamedDropdownBlock>
                        <Selectable text={"test"}/>
                        <Selectable text={"test"}/>
                    </NamedDropdownBlock>

                </div>

                <div className={"col2"}>
                    <NamedCheckBox state={remoteView} onClick={setRemoteView} title={"Удаленный просмотр на Смартфоне/планшете/ПК"}/>
                    <NamedCheckBox state={internet} onClick={setInternet} title={"Интернет на обьекте установлен:"}/>
                    <NamedCheckBox state={cloudStorage} onClick={setCloudStorage} title={"Облачное хранение:"}/>
                </div>
            </Block>


            <Block title={"Камеры"} className={"cams"}>
                <div className={"col1"}>
                    <InlineSelectChoises title={"Качество камер: "} choises={cams_choises_objects}/>
                    <InlineInputChange
                        title={"*Кол-во дней записи:"}
                        placeholder={12}
                        inp_key={uuidv4()}
                        state={quantityRecDays}
                        setState={setQuantityRecDays}/>
                    <InlineInputChange
                        title={"*Кол-во микрофонов:"}
                        placeholder={12}
                        inp_key={uuidv4()}
                        state={quantityMicro}
                        setState={setQuantityMicro}/>
                </div>

                <div className={"col2"}>

                </div>

            </Block>

        </div>
    );
}

export {DeliveryCalc};