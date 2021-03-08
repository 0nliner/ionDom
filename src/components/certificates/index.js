import react from "react";

import "./style.scss";

import {NamedSection} from "../NamedSection";

import cert1 from "../../static/certs/image 117.png";
import cert2 from "../../static/certs/image 118.png";
import cert3 from "../../static/certs/image 119.png";
import cert4 from "../../static/certs/image 120.png";



function Certificates (props) {
    // props.img_url

    function Certificate (props) {
        return <div className={"cert"} style={{backgroundImage: `url("${props.img_url}")`}}/>;
    }

    return (
        <NamedSection title={"Сертификаты"}>
            <div className={"certificates"}>
                <Certificate img_url={cert1}/>
                <Certificate img_url={cert2}/>
                <Certificate img_url={cert3}/>
                <Certificate img_url={cert4}/>
            </div>
        </NamedSection>
    );
}

export {Certificates};