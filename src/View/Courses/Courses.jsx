import {useEffect, useState} from "react";
import style from  '../../global.module.scss';
import Line from "../../Components/LineMap/Line";
import parse from 'html-react-parser';
import Course from "../../Components/Courses/Course";
import '../../global.css';
import {useInView} from "react-intersection-observer";




const Courses = () => {

    let elem= parse('<img src="./courses.png">');


    const [viewState, setViewState] = useState(false);



   //Line style
    const lineStyle ={
          theme: elem,
          style:style.linemap_line_courses

      }


   //Cards
   const classicModule = {
       title: 'Классический модуль',
       description: 'Основы программирования',
       style: style.courses_classic_module,
       title_style:style.courses_classic_module_title,
       image_style:style.courses_classic_module_image,
       button_style:style.courses_classic_module_button,
       image:'./Animacion.gif',
   }

    const reactModule = {
        title: 'Реактивный модуль',
        description: 'Основы программирования',
        style: style.courses_react_module,
        title_style:style.courses_react_module_title,
        image_style:style.courses_react_module_image,
        button_style:style.courses_react_module_button,
        image:'./react_card.gif',
    }

    const eyePro = {
        title: 'профессиональный модуль',
        description: 'Основы программирования',
        style:style.courses_eyepro_module,
        title_style:style.courses_eyepro_module_title,
        image_style:style.courses_eyepro_module_image,
        button_style:style.courses_eyepro_module_button,
        image:'./eyepro_card.jpeg',

    }



    return(
        <section  className={style.courses} >

            <Line {...lineStyle}/>
             <Course  {...classicModule}    />
             <Course {...reactModule} />
             <Course {...eyePro}/>
            {/*<section className={style.courses_aes}><img src="./courses_aes.jpeg"/></section>*/}

        </section>


    )


}

export default Courses;