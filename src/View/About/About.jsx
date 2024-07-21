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


      ;<br/>
      <div className={'code'} ref={ref}> // EyeCode - это новый взгляд на будущее IT - мира.
          <br/>
          <br/>
          Меня зовут Серкан Зохрабов - автор курсов EyeCode.
          <br/>В чем особенность подхода к обучению ?
          <br/>
          >
          IT-мир очень быстро меняется.Мы не успели привыкнуть как быстро рождаются новые фреймворки а тут нас атакует
          исскуственный интелект.
          Многие впали в отчаяние.Youtube заразился контентом 'ИИ ЗАМЕНИТ ТЕБЯ'.
          Наша цель приручить ИИ и использовать его для решения наших задач.
          EyeCode имеет уникальный подход к обучению.
          В начале обучения вы выбираете стиль обучения. <br/>
          <span className='class'>GameMode Learning</span> <br/>
          <span className='blue'> SoftwareMode Learning </span> <br/>
          GameMode Learning - это стиль обучения через создания простых игр тем самым осваивая новые знания.
          SoftwareMode Learning - это стиль обучения через создания лендингов/сайтов/ тем самым осваивая новые знания.

          <br/>
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