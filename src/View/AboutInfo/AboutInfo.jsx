import style from '../../global.module.scss';
import { Link } from 'react-router-dom';
import {useEffect, useId} from "react";
import AboutInfoCard from "./AboutInfoCard";
import  { modules} from "../../Modules/module";
import Contacts from "../Contacts/Contacts";
import Footer from "../Footer/Footer";


const AboutInfo = () => {



    useEffect(() => {
          window.scrollTo(0,0);
    }, []);





    




    







    return(


        <>
            <section className={style.about_info}>

                <AboutInfoCard  {...modules[3]} />
                <AboutInfoCard  {...modules[4]}/>
                <AboutInfoCard  {...modules[5]} />

                <Link to='/'>
                <button className={style.about_info_button}>
                    Назад
                </button>
                </Link>

            </section>
            
        </>)

}

export default AboutInfo;