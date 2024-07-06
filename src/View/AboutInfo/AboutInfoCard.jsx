import React from'react';
import style from "../../global.module.scss";
import {PieChart} from "@mui/x-charts";




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
                    <div>Получаешь:
                        <ul>{props.description}</ul>
                    </div>
                </div>

                <div className={style.card_flex}>
                    <div className={style.about_line}></div>
                    <div>Длительность: {props.duration}</div>

                    <div className={'code'}>{props.more}</div>
                </div>




            </div>

   <div className={'center'}>

       <PieChart


           series={[
               {
                   data: [
                       {id: 0, value: props.state[0], color: '#a20043' ,label:'Качество'},
                       { id: 1, value:props.state[1],color:'violet',label:'Duration' },
                       { id: 2, value: props.state[2],color:'orange',label:'Java'}
                   ],
                   highlightScope: { faded: 'global', highlighted: 'item' },
                   faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
                   paddingAngle: 5, // угол открытия
                   innerRadius: 29, // внутренний радиус
               },
           ]}
           width={400}
           height={200}
       />

   </div>



            <div className={props.footer}>
               <button>{props.price}</button>
            </div>
        </div>
    )
}

export default AboutInfoCard;   