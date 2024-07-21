import react from'react';
import style from '../../global.module.scss'
import {useId} from "react";
import parse from "html-react-parser";
import Email from "../../Components/Email/Email";
import Footer from "../../View/Footer/Footer";
import {useInView} from "react-intersection-observer";
import EduMode from "../EduMode/EduMode";
const Contacts = () => {
    let elem= parse('<img src="./courses.png">');

    let id = useId();
    const {ref, inView} = useInView({

        threshold: 0.3
    });


    return(

 <>
 <section id={'cd contacts'} ref={ref} className={inView ? style.contacts : 'hidden'}>

     <div className={style.contacts_email}>

         <p> Если у вас возникли вопросы, пожалуйста, свяжитесь с нами: <a
             href="mailto:eyecode.academy@gmail.com">eyecode.academy@gmail.com</a></p>


     </div>

     <div className={style.contacts_tme}>
         <p>Подписаться на наши обновления</p>
         <Email placeholder="Ваш email"/>
         <label htmlFor={id}><input id={id} type={'checkbox'}/> <span> Даю согласие на обработку моих персональных данных</span> </label>
     </div>
 <div className={style.contacts_other}>

     <nav>

      <ul>
          <li><a href="">О нас</a></li>
          <li><a href="">Модули обучения</a></li>
          <li><a href="">Консультация</a></li>
          <li><a href="">Задать вопрос </a></li>
      </ul>
         
         
     </nav>


     <div>
                    <img src="./instagram.png" alt=""/>
                    <img src="./github.png" alt=""/>
                    <img src="./discord.png" alt=""/>
                </div>


            </div>
        </section>



     </>

    )


}

export default Contacts;