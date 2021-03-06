import react from "react";
import "style.scss";


function NamedSection (props) {
    // props.title
    // props.children

    return (
        <div>
            <h2>
                {props.text}
            </h2>
            {props.children}
        </div>
    );
}

export {NamedSection};