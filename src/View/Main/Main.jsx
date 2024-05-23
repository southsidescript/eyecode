import Email from "../../Components/Email/Email";
import style from '../../global.module.scss';
import {useEffect, useState} from "react";
import Line from "../../Components/LineMap/Line";
import About from "../About/About";
import Courses from "../Courses/Courses";
import Feedback from "../Feedbacks/Feedback";
import Contacts from "../Contacts/Contacts";
import Footer from "../Footer/Footer";
const Main = () =>{

    const  [preview,setPreview] = useState(['']);
    const assets = ['Ч','т','о',' ','в','а','с',' ','и','н','т','е','р','е','с','у','е','т'];

    useEffect(() => {
        for(let i =0;i<assets.length;i++){
            setTimeout(()=>{
                setPreview(preview=> [...preview,assets[i]])
            },120 * i)

        }

    }, []);


   return(
       <>
           <main className={style.main}>
               <section className={style.sectionheader}>{preview.map(n => n)} <span
                   className={style.question}>{preview.length < 19 ? '|' : '?'}</span></section>
               <Email placeholder={'Email address'}/>
               <section className={style.maindesignelems}><img src="./Fray.jpeg" alt=""/></section>
               <section className={style.cooperate}>
                   Мы соотрудничаем:
                   <div className={style.main_logos}><img src="./logo_finam.png" alt=""/><img src="./reu.png" alt=""/>
                   </div>
               </section>
               <About/>
               <Courses/>
               <Feedback/>


           </main>

           <Contacts/>
           <Footer/>
       </>



)
}

export default Main;