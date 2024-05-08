import style from '../../global.module.scss';
import Line from "../../Components/LineMap/Line";
import parse from 'html-react-parser';
import {useEffect, useRef} from "react";
import {useInView} from "react-intersection-observer";



const About = () => {


    const {ref,inView} = useInView({
        threshold:0.5,
    });

   const elem = parse('<img src="./about.png" alt=""/>')

    const lineStyle ={
        theme: elem,
        style:style.linemap_line_about

    }




return(
    <section id={'about'} className={style.about}>
        <Line {...lineStyle} />
        <div ref={ref} className={inView? style.about_description: 'hidden'}>
            EyeCode - это новый взгляд обучению IT-профессиям.
            Меня зовут Серкан Зохрабов - автор курсов EyeCode.
            <br/>
            <br/>
            В чем особенность подхода к обучению ?
            Дело в том что в IT мире технологии и знания со временем теряют актуальность.
            Наша команда буквально 24/7 отслеживает изменения рынка и учитывает ее потребности к специалистам.
            Также все студенты получают к закрытому телеграм каналу в котором ежедневно:Публикуются актуальные новости ,полезные материалы,
            задания.
        </div>
        <div className={style.about_logo}>
            <div ><img src="./anim.gif" alt=""/> </div>
        </div>


    </section>

)


}

export default About;