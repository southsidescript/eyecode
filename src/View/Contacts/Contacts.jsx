import react from'react';
import style from '../../global.module.scss'
import Line from "../../Components/LineMap/Line";
import parse from "html-react-parser";
import Email from "../../Components/Email/Email";
import Footer from "../../View/Footer/Footer";
const Contacts = () => {
    let elem= parse('<img src="./courses.png">');

    const linestyle = {
        theme:elem,
        style:style.linemap_line_courses
    }


    return(

 <>
        <section className={style.contacts}>



            <div className={style.contacts_email}>

                <p> Если у вас возникли вопросы, пожалуйста, свяжитесь с нами: <a href="mailto:eyecode.academy@gmail.com">eyecode.academy@gmail.com</a></p>


            </div>

            <div className={style.contacts_tme}>
                 <p>Оставить отзыв</p>
                 <Email placeholder="ваш отзыв"/>
               

            </div>

            <div className={style.contacts_other}>





            </div>
        </section>



     </>

    )


}

export default Contacts;