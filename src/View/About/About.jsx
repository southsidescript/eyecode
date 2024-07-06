import style from '../../global.module.scss';

import parse from 'html-react-parser';
import {useEffect, useRef} from "react";
import {useInView} from "react-intersection-observer";
import Codeblock from "../../Components/Codeblock/Codeblock";


const About = () => {


    const {ref,inView} = useInView({
        threshold:0.5,

    });






return(


        <section id='about' className={inView?style.about:'hidden'}>


  <Codeblock>


      <span className='import'>import </span> EyeCode from 'eye-code';<br/>
      <span className='import'>import </span> ClassicModule from 'classic-module'; <br/>
      <span className='import'>import </span> React from 'react-module';

      ;<br/> <div className={'code'}  ref={ref}>   // EyeCode - это новый взгляд обучению IT-профессиям.
          <br/>
          <br/>
          Меня зовут Серкан Зохрабов - автор курсов EyeCode.
         <br/>В чем особенность подхода к обучению ?
          <br/>
          > Дело в том что в IT мире технологии и знания со временем теряют актуальность.<br/>
          Наша команда буквально 24/7 отслеживает изменения рынка и учитывает ее потребности к специалистам. <br/>
          Также все студенты получают к закрытому <span className='class'>телеграм каналу</span>  в котором ежедневно:Публикуются актуальные
          новости ,полезные материалы,задания. <br/>
          <br/>
          <span className='succesfuly_message'>acquaintance completed successfully</span>

         <div className={'success_matrix'}>


         </div>

      </div>




  </Codeblock>



            <div className={style.about_support_window}>



            </div>


        </section>


)


}

export default About;