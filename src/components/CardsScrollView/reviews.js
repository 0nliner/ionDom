import {CardsScrollView, Card} from "./index";
import image91 from "../../pages/main_page/static/images/image 91.png";

function Reviews (props) {
    return (
        <CardsScrollView title={"отзывы"}>
            <Card title={"example card"} description={"шла саша по шоссе и сосала сушку"} img_src={image91}/>
            <Card title={"example card 2"} description={"шла сушка по шоссе и сосала сашу"} img_src={image91}/>
            <Card title={"???"} description={"шла сушка по шоссе и сосала сашу"} img_src={image91}/>
        </CardsScrollView>
    );
}

export {Reviews};