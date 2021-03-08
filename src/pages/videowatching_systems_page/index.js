import react from "react";

import {Header} from "../../components/header";
import {Nav} from "../../components/nav";
import Banner from "../../components/banner";
import TurnkeyInstalation from "../../components/turnkeyInstalation";
import {SetupCards} from "../../components/setup_cards";
import {DeliveryCalc} from "../../components/delivery_calc";
import {ItemsBlock} from "../../components/itemCard";
import AdditionalOptions from "../../components/additionalOptions";
import {ProjectsExamples} from "../../components/CardsScrollView/projectExamples";
import {Reviews} from "../../components/CardsScrollView/reviews";
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
                <ItemsBlock/>
                ...
                <AdditionalOptions/>
                <ProjectsExamples/>
                <Reviews/>
                <Footer/>
            </div>

        </div>
    );
}


export {VideoWatchingPage};