import React, {useEffect, useState} from 'react';
import ReactDOM from'react-dom';
import style from '../../global.module.scss';
import  {useInView} from  'react-intersection-observer';
import CoursesCard  from  '../../Components/Courses/Course';

import  {modules} from "../../Modules/module";

const Courses = () => {




    const {ref,inView} = useInView({

        threshold:0.5,

    });







    return(

        <section className={style.courses}>

        <div ref={ref} className={inView?style.courses_header:'hidden'}>

          Модули в eye<span className={'code'}>code</span>

        </div>


            <section className={style.courses_content}>

                <CoursesCard   {...modules[0]}/>
                <CoursesCard   {...modules[1]}/>
                <CoursesCard   {...modules[2]}/>

            </section>




        </section>








    )





}


export default Courses;
