import react from "react";

import {useDispatch, useSelector} from "react-redux";
import {canBeAddedElements, selectElements, selectedOptions, optionAlternative, selectOption} from "./redux/selectors";
import {addUnit, replaceOption, setActivated, subUnit} from "./redux/actions";

import {HiContrastDropDown} from "../Dropdowns";
import {NamedSection} from "../NamedSection";

import showArrowSVG from "../../static/icons/Group 145.svg";
import addSVG from "../../static/icons/ant-design_plus-outlined.svg";
import subSVG from "../../static/icons/ant-design_plus-outlined-1.svg";

import "./style.scss";



function SetupOptions (props) {
    // props
    // props.title

    function Row(props) {
        // props
        //
        // props.id
        let color = selected_options.find(el=> el.id === props.id) % 2 ?
            "white" : "#F4F4F4";

        let current_data = useSelector(selectOption(props.id));
        let option_alternative = useSelector(optionAlternative(props.id));

        let option_total_price = current_data.count * current_data.price_for_unit;


        function RowSelectableAlternative (props) {
            // строка альтернативного варианта конкретной опции,
            // при нажатии происходить замена изначальной опции
            // на текущуую (выбранную)

            // действия
            //
            // установить как альтернативу изначальной опции
            //

            let alernative_current_data = useSelector(selectOption(props.id));

            return (
                <div className={"RowSelectableAlternative row"}
                     onClick={()=>dispatch(replaceOption(current_data.id, alernative_current_data.id))}>

                    <div className="title">
                        {alernative_current_data.title}
                    </div>

                    <div className="price">
                        {alernative_current_data.price_for_unit}
                    </div>
                </div>
            );
        }

        return (
          <div className={"row"} style={{backgroundColor: color}}>
              <div className={"title"}>
                  {current_data.title}
              </div>

              {/* TODO: реализовать механизм замены полностью */}
              <HiContrastDropDown title={"Заменить"} addclass={"replace"}>
                  <div className={"altrow_content_holder"}>
                      {option_alternative.map((el)=><RowSelectableAlternative id={el}/>)}
                  </div>
              </HiContrastDropDown>

              <div className={"counter"}>
                  <img src={subSVG}
                       className={"sub"}
                       onClick={()=>dispatch(subUnit(props.id))}/>

                  <div className={"content_holder"}>{current_data.count}</div>

                  <img src={addSVG}
                       className={"add"}
                       onClick={()=>dispatch(addUnit(props.id))}/>
              </div>


              <div className={"price"}>
                  {option_total_price} руб.
              </div>
          </div>
        );
    }

    function SelectableRow (props) {
        // строка для добавления опции в список

        let alernative_current_data = useSelector(selectOption(props.id));

        return (
            <div className={"simplified_row row"}
                 onClick={()=>dispatch(setActivated(!alernative_current_data.activated, alernative_current_data.id))}>

                <div className="title">
                    {alernative_current_data.title}
                </div>

                <div className="price">
                    {alernative_current_data.price_for_unit}
                </div>
            </div>
        );
    }

    let dispatch = useDispatch();

    let current_options = useSelector(selectElements);
    let can_be_added_elements = useSelector(canBeAddedElements);
    let selected_options = useSelector(selectedOptions);

    let totalPrice = 0;


    for (let el of selected_options) {
        totalPrice += el.count * el.price_for_unit;
    }

    return (
        <NamedSection title={"Цена монтажа ip видеокамер"}>
            <div className={"SetupOptions"}>
                <div className={"top_bar"}>
                    <div className={"total_price"}>
                        Цена за работы на камеры:
                        <p className={"num"}>{totalPrice} руб.</p>
                    </div>
                </div>

                <div className={"rows"}>
                    {selected_options.map((props)=><Row {...props}/>)}


                    <HiContrastDropDown title={"+ Добавить услугу"} addclass={"add_option"}>
                        <div className={"altrow_content_holder"}>
                            {can_be_added_elements.map((props)=><SelectableRow {...props}/>)}
                        </div>

                    </HiContrastDropDown>

                </div>


                {/*<div className={"bottom"}>*/}
                {/*    <div className={"showBtn"} onClick={showMore}>*/}
                {/*        <img className={"arrow"} src={showArrowSVG}/>*/}
                {/*        <div className={"text"}>*/}
                {/*            Показать ещё*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}

            </div>
        </NamedSection>
    );
}

export {SetupOptions};