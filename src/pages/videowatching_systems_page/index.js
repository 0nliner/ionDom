import react from "react";

import {Nav} from "../../components/nav";
import TurnkeyInstalation from "../../components/turnkeyInstalation";
import {SetupCards} from "../../components/setup_cards";
import {DeliveryCalc} from "../../components/delivery_calc";
import AdditionalOptions from "../../components/additionalOptions";


import "./style.scss";


function VideoWatchingPage () {
    return (
        <div>
            <Nav/>
            ...
            ...
            <TurnkeyInstalation/>
            <SetupCards/>
            ...
            <DeliveryCalc/>
            ...
            <AdditionalOptions/>
        </div>
    );
}


export {VideoWatchingPage};