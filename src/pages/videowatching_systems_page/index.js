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
import {Recommendations} from "../../components/recomendation";
import {ProjectsExamples} from "../../components/CardsScrollView/projectExamples";
import {Reviews} from "../../components/CardsScrollView/reviews";
import {Certificates} from "../../components/certificates";
import {Partners} from "../../components/partners";
import {Footer} from "../../components/footer";
import {StartHelpUnderrow} from "../../components/startHelpUnderrow";

import {FiveReasons} from "../../components/FiveReasons";
import "./style.scss";


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
                <Recommendations/>
                <ProjectsExamples/>
                <Reviews/>
                <Certificates/>
                <Partners/>
                <FiveReasons/>
                <Footer/>
            </div>

        </div>
    );
}


export {VideoWatchingPage};