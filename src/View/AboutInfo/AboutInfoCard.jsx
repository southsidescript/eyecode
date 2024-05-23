import React from'react';
import style from "../../global.module.scss";





const AboutInfoCard = (props) => {


    return (
        <div className={props.style}>
            <div className={props.header}>
            </div>


            <div className={props.main}>

                <div className={style.card_flex}>
                    <div className={style.about_line}></div>
                    <div> {props.title}</div>
                </div>

                <div className={style.card_flex}>
                    <div className={style.about_line}></div>
                    <div>{props.description}</div>
                </div>


            </div>
            <div className={props.footer}></div>
        </div>
    )
}

export default AboutInfoCard;