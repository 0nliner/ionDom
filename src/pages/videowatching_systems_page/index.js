import react from "react";

import {Header} from "../../components/header";
import {Nav} from "../../components/nav";
import Banner from "../../components/banner";
import TurnkeyInstalation from "../../components/turnkeyInstalation";
import {SetupCards} from "../../components/setup_cards";
import {DeliveryCalc} from "../../components/delivery_calc";
import AdditionalOptions from "../../components/additionalOptions";
import {Footer} from "../../components/footer";

import "./style.scss";


function VideoWatchingPage () {
    return (
        <div className={"VideoWatchingPage"}>
            <Nav/>

            <div className={"content"}>
                <Header/>
                <Banner/>
                ...
                <TurnkeyInstalation/>
                <SetupCards/>
                ...
                <DeliveryCalc/>
                ...
                <AdditionalOptions/>
                <Footer/>
            </div>

        </div>
    );
}


export {VideoWatchingPage};