import styles from './style.module.scss'


import imgMarket from "../../static/market.png";
import imgWarehouse from "../../static/warehouse.png";
import imgCottage from "../../static/cottage.png";
import imgEntrance from "../../static/entrance.png";
import imgElevator from "../../static/elevator.png";
import imgDaca from "../../static/dacha.png";
import {NamedSection} from "../NamedSection";


function CardSpace() {
    return (
        <NamedSection title={"Установка под ключ на любые обьекты, в том числе:"}>
            <div className={styles.cardSpace}>
                <Card name="Дом" imgUrl={imgMarket} />
                <Card name="Дача" imgUrl={imgDaca} />
                <Card name="Коттедж" imgUrl={imgWarehouse} />
                <Card name="Квартира" imgUrl={imgEntrance} />
                <Card name="Подъезд" imgUrl={imgElevator} />
                <Card name="Лифт" imgUrl={imgCottage} />
            </div>
        </NamedSection>
    );

    // return (
    //     <div className={styles.container}>
    //         <div className={styles.headtext}>Установка под ключ на любые обьекты, в том числе:</div>
    //         <div className={styles.cardSpace}>
    //             <Card name="Дом" imgUrl={imgMarket} />
    //             <Card name="Дача" imgUrl={imgDaca} />
    //             <Card name="Коттедж" imgUrl={imgWarehouse} />
    //             <Card name="Квартира" imgUrl={imgEntrance} />
    //             <Card name="Подъезд" imgUrl={imgElevator} />
    //             <Card name="Лифт" imgUrl={imgCottage} />
    //         </div>
    //     </div>
    // )
}


function Card(props) {
    return (
        <div className={styles.card} style={{backgroundImage: `url(${props.imgUrl})`}}>
            <div className={styles.cardText}>{props.name}</div>
        </div>
    )
}

export default CardSpace;