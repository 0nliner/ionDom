import react from "react";

import "./style.scss";

import leftArrow from "../../static/icons/Arrow 15.svg";
import rightArrow from "../../static/icons/Arrow 16.svg";
import {NamedSection} from "../NamedSection";



function Card (props) {
    // props.title
    // props.img_src
    // props.description
    const max_length = 100;

    return (
        <div className={"Card"}>
            <div className={"img"} style={{backgroundImage:props.img_src}}/>
            <h3>{props.title}</h3>

            <div className={"description"}>
                {/* обрезаем строку, чтобы она помещалась в карточке */}
                {props.description.length <= max_length ? props.description : () => {
                    let short_desc = "";
                    for (let [index, char] of props.description.entries()) {
                        if (index >= max_length) return short_desc;
                        short_desc += char;
                    }
                }}
            </div>
            <button>читать</button>
        </div>
    );
}


function CardsScrollView(props) {
    // props.title
    // props.children
    let [rerenderTime, setRerenderTime] = react.useState(Date.now());


    function ScrollLeft (props) {
        return (
            <div className={"scroll ScrollLeft"}>
                <img src={leftArrow}/>
            </div>
        );
    }

    function ScrollRight (props) {
        return (
            <div className={"scroll ScrollRight"}>
                <img src={rightArrow}/>
            </div>
        );
    }

    return (
        <NamedSection>
            <div className={"CardsScrollViewWrapper"}>
                <div className={"top_bar"}>
                    <h2>
                        {props.title}
                    </h2>

                    <nav>
                        <a href="#" className={"showAll"}>
                            Показать все
                        </a>

                        <img className={"left_arrow"} src={leftArrow}/>
                        <img className={"right_arrow"} src={rightArrow}/>

                    </nav>

                </div>

                <div className={"CardsScrollView"}>
                    <ScrollLeft/>
                    <ScrollRight/>

                    {props.children.slice(0, props.children.length >= 3 ? 3 : props.children.length )}
                </div>
            </div>
        </NamedSection>
    );
}


export {CardsScrollView, Card};