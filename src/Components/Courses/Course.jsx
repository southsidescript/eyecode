import React from'react';
import style from '../../global.module.scss';
import {useInView} from "react-intersection-observer";
import { Link } from 'react-router-dom'



const Course = (props) => {

    const {ref,inView} = useInView({
        threshold:0.5,
        triggerOnce:true}
    );





    return(
        <section ref={ref} className={inView ? props.style :'hidden' }>
           <div className={props.image_style}>
               <img src={props.image} alt=""/>
           </div>
            <div className={props.title_style}>{props.title}</div>
            <div className={props.button_style}><Link to='/about'>Что я получу ?</Link></div>

        </section>

    )
}

export default Course;