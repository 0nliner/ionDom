import react from "react";
import "./style.scss";
import arrow_logo from "../../static/Arrow 11.svg";


function Dropdown (props) {
    // props.children - children components
    // props.onClick - onClick event
    // props.state

    return (
        <div className={"dropdown"} onClick={props.onClick}>
            <div className={"title"}>
                {props.title}
            </div>
            <div className={"arrow_wrapper"}>
                <Arrow state={!props.state}/>
            </div>
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
    // props.onClick

    return (
        <div className={"selectable"} onClick={
            (event) => {
                props.onClick(event, props)
            }
        }>
            {props.text}
        </div>
    );
}

function DropdownBlock (props) {
    // props.title - тайтл для dropdown

    let [displayInnerContent, setDisplayInnerContent] = react.useState(false);

    return (
        <div className={"dropdown_block"}>
            <Dropdown title={props.title}
                      state={displayInnerContent}
                      onClick={() => setDisplayInnerContent(!displayInnerContent)}/>

            <DropdownContent show={displayInnerContent}>
                {props.children}
            </DropdownContent>
        </div>
    );
}


function Arrow (props) {
    // props.state
    return <img src={arrow_logo} className={ props.state ? "arrow" : "arrow_reversed"}/>;
}


function NamedDropdownBlock (props) {
    // props.children

    let [selected, setSelected] = react.useState(null);
    let [show, setShow] = react.useState(false);
    let [new_children, setNewChildren] = react.useState(parseChildren());


    function parseChildren () {
        let children = [];
        for (let child of props.children) {
            if (child.type === Selectable) {
                let new_child = <Selectable text={child.props.text} onClick={(event, props) => setSelected(props.text)}/>;
                children = children.concat(new_child);
            }
        }
        return children;
    }

    return (
        <div className={"named_dropdown_wrapper"}>
            <div className={"named_dropdown"}>

                <div className={"selected_field"}>
                    {selected}
                </div>

                <div className={"arrow_container"} onClick={() => setShow(!show)}>
                    <Arrow state={!show}/>
                </div>
            </div>

            <DropdownContent show={show}>
                {new_children}
            </DropdownContent>

        </div>
    );
}



function InlineSelectChoises (props) {
    // props.choises
    // props.title
    // props.set_choise

    let choises = [];

    for (let choise of props.choises) {
        choises = choises.concat(choise);
        choises = choises.concat(" / ");
    }

    choises = choises.slice(0, -1);

    return (
        <div className={"inline_select"}>
            <div className={"title"}>
                {props.title}
            </div>

            <div className={"choices"}>
                {choises}
            </div>
        </div>
    );
}


export {DropdownBlock,
        NamedDropdownBlock,
        Selectable,
        InlineSelectChoises};