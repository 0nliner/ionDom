import react from "react";

import "./style.scss";

import {NamedSection} from "../NamedSection";

import im96 from "../../static/partners/image 96.png";
import im97 from "../../static/partners/image 97.png"
import im101 from "../../static/partners/image 101.png";
import im102 from "../../static/partners/image 102.png";
import im103 from "../../static/partners/image 103.png";
import im104 from "../../static/partners/image 104.png";




function Partners (props) {
    return (
        <NamedSection title={"Наши партнёры"}>

            <div className={"partners"}>
                <div className="wrapper row">
                    <div>
                        <img alt="фотография не загружена" src={im96}/>
                    </div>
                    <div>
                        <img alt="фотография не загружена" src={im97}/>
                    </div>
                    <div>
                        <img alt="фотография не загружена" src={im101}/>
                    </div>
                    <div>
                        <img alt="фотография не загружена" src={im102}/>
                    </div>
                    <div>
                        <img alt="фотография не загружена" src={im103}/>
                    </div>
                    <div>
                        <img alt="фотография не загружена" src={im104}/>
                    </div>

                </div>
            </div>

        </NamedSection>
    );
}


export {Partners};