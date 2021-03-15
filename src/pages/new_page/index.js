import react from "react";

import {Header} from "../../components/header";
import {Nav} from "../../components/nav";
import Banner from "../../components/banner";
import {CitySelector} from "../../components/citySelector";
import TurnkeyInstalation from "../../components/turnkeyInstalation";
import {SetupCards} from "../../components/setup_cards";
import {DeliveryCalc} from "../../components/delivery_calc";
import {ItemsBlock} from "../../components/itemCard";
import {Starthelp} from "../../components/Starthelp";
import AdditionalOptions from "../../components/additionalOptions";
import {SetupOptions} from "../../components/SetupOptions";
import {ProjectsExamples} from "../../components/CardsScrollView/projectExamples";
import {Reviews} from "../../components/CardsScrollView/reviews";
import {Certificates} from "../../components/certificates";
import {Partners} from "../../components/partners";
import {Footer} from "../../components/footer";

import "./style.scss";
import {StartHelpUnderrow} from "../../components/startHelpUnderrow";


function VideoWatchingPage () {
    return (
        <div className={"VideoWatchingPage"}>
            <Nav/>

            <div className={"content"}>
                <Header/>
                <Banner/>
                <CitySelector/>
                <TurnkeyInstalation/>
                <SetupCards/>
                <Starthelp/>
                <StartHelpUnderrow/>
                <DeliveryCalc/>
                <ItemsBlock/>
                <SetupOptions/>
                <AdditionalOptions/>
                ...
                <ProjectsExamples/>
                <Reviews/>
                <Certificates/>
                <Partners/>
                ...
                <Footer/>
            </div>

        </div>
    );
}


export {VideoWatchingPage};