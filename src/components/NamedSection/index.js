import react from "react";
import "./style.scss";

function NamedSection (props) {
    // props.title
    // props.children

    return (
        <div class={"named_section"}>
            <h2>
                {props.title}
            </h2>
            {props.children}
        </div>
    );
}

export {NamedSection};