import React from'react';
import style from '../../global.module.scss';
import {useInView} from "react-intersection-observer";
import { Link } from 'react-router-dom'



const Course = (props) => {

    const {ref,inView} = useInView({
        threshold:0.5,}
    );





    return(



            <div  ref={ref} className={inView? props.style: 'hidden'}>
                <div    className={props.headerStyle}> {props.title}</div>
                <div    className={props.titleStyle}>{props.duration}</div>
                <Link to={'./about'}>
                    <button className={props.buttonStyle}> Что я получу ?</button>
                </Link>


            </div>




    )
}

export default Course;