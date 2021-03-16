import React from "react";

import "./style.scss";

import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {display} from "@material-ui/system";

import starSVGIcon from "../../static/icons/start.svg";
import {NamedSection} from "../NamedSection";


const RecommendationsStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },

    accordion: {

        boxShadow: "0px 7px 23px rgba(32, 87, 170, 0.14)",

        borderRadius: "10px",
        border: 1,
        borderStyle: "solid",
        borderColor: "rgba(31, 95, 191, 0.2)",
        borderBlockWidth: "1px",
        marginTop: "20px"
    },

    heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '33.33%',
        flexShrink: 0,
    },

    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },

    // item styles
    item: {
        display: "flex",
        position: "relative",

        width: "calc(100% - 20px)",
        height: "50px",

        borderBottom: 1,
        borderBlockWidth: "1px",
        borderStyle: "solid",
        borderColor: "#d0dae1"

    },

    item_title: {
        position: "absolute",
        display: "grid",
        placeContent: "center",
        height: "100%",
        left: "5px",
        color: "black",
    },

    right_menu: {
        position: "absolute",
        display: "flex",
        placeItems: "center",
        placeContent: "center",
        height: "100%",
        right: "5px",
    },

    price: {
        color: "#1F5FBF",
        // height: "100%",
        marginRight: "10px"
    },

    counter : {
        display: "flex",
        height: "40px",
        position: "relative",
        marginRight: "10px"
    },

    counter_sub_btn : {
        position: "relative",
        display: "grid",
        placeContent: "center",

        width: "40px",
        height: "42px",

        color: "white",
        backgroundColor: "#1F5FBF",

        borderTopLeftRadius: "5px",
        borderBottomLeftRadius: "5px",
    },

    counter_add_btn: {
        position: "relative",
        display: "grid",
        placeContent: "center",

        width: "40px",
        height: "42px",

        color: "white",
        backgroundColor: "#1F5FBF",

        borderTopRightRadius: "5px",
        borderBottomRightRadius: "5px",

    },

    quantity : {
        position: "relative",
        display: "grid",
        placeContent: "center",

        minWidth: "40px",
        height: "40px",

        color: "#1F5FBF",
        backgroundColor: "white",

        border: 1,
        borderStyle: "solid",
        borderBoxWidth: "1px"
    },

    in_basket : {
        display: "flex",
        padding: "5px 10px",
        color: "white",
        backgroundColor: "#FD7000",
        borderRadius: "5px",
        marginRight: "10px"
    },

    star : {
        width: "40px",
        height: "40px",
        display: "grid",
        placeContent: "center",
        border: "1px solid #1F5FBF",
        borderRadius: "1000px"
    }
}));

function Recommendations (props) {
    const classes = RecommendationsStyles();
    const [expanded, setExpanded] = React.useState(false);

    let categories = [
        {
            title: "Test category",
            children: [
                {
                    title: "Купи слона",
                    price_for_unit: 100,
                    count: 11
                }
            ],
        }
    ];

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    function RecommendationDropdown (props) {
        // props.title

        return (
            <Accordion expanded={expanded === props.title} className={classes.accordion} onChange={handleChange(props.title)}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography className={classes.heading}>{props.title}</Typography>
                    {/*<Typography className={classes.secondaryHeading}>I am an accordion</Typography>*/}
                </AccordionSummary>
                <AccordionDetails>
                    {props.children}
                </AccordionDetails>
            </Accordion>
        );
    }


    function Item (props) {
        // props.title

        let quantity = React.useState(0);

        return (
            <div className={classes.item}>
                <div className={classes.item_title}>
                    {props.title}
                </div>
                <div className={classes.right_menu}>
                    <div className={classes.price}>
                        {props.price} руб.
                    </div>

                    <div className={classes.counter}>
                        <button className={classes.counter_sub_btn}>-</button>
                        <div className={classes.quantity}>{quantity}</div>
                        <button className={classes.counter_add_btn}>+</button>
                    </div>

                    <button className={classes.in_basket}>
                        в корзину
                    </button>

                    <div className={classes.star}>
                        <img src={starSVGIcon}/>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <NamedSection title={"Дополнения к системе для дома"}>
            <div className={classes.root}>
                {categories.map(category=>
                    <RecommendationDropdown title={category.title}>
                        {category.children.map(el=><Item title={el.title}/>)}
                    </RecommendationDropdown>)}
            </div>
        </NamedSection>
    );
}

export {Recommendations};