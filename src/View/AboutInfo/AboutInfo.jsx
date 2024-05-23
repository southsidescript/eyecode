import style from '../../global.module.scss';
import { Link } from 'react-router-dom';
import {useEffect} from "react";
import AboutInfoCard from "./AboutInfoCard";
import parse from 'html-react-parser';


const AboutInfo = () => {


    useEffect(() => {
          window.scrollTo(0,0);
    }, []);



    const elem = parse('Изучишь: <br> <img' +
        ' src="./html.png"' +
        ' alt=""/>' +
        'HTML5 <br> <img' +
        ' src="./css.png" ' +
        'alt=""/>' +
        'CSS3 <br> <img' +
        ' src="./js.png"\n' +
        'alt=""/>' +
        'JavaScript <br> <img' +
        ' src="./sass.png"' +
        ' alt="">'+
        'Sass <br>' + '' +
        '<img src="./bem.png" alt="">' +'BEM <br>'+
    ' <img src="./git.png" alt=""/>' + 'GITHUB' + '<br>' +
      '<img src="./git_tool.png" alt=""/>' + 'GIT')





    const reactElem= parse('Изучишь: <img src="./html.png" alt=""/> <img src="./css.png" alt=""/>')

     const cardStyleClassic = {
        style:style.about_info_classic,
         title:'Классический модуль',
         header:style.about_info_classic_header,
          main:style.about_info_classic_main,
         description:elem,
         footer:style.about_info_classic_footer
     }



     const cardStyleReact = {
        style:style.about_info_react,
         title:'React модуль',
         header:style.about_info_react_header,
          main:style.about_info_classic_main,
         description:null,
         footer:style.about_info_react_footer
     }

     const cardStyleProf = {
        style:style.about_info_prof,
         title:'Профессиональный модуль',
         header:style.about_info_prof_header,
          main:style.about_info_classic_main,
         description:null,
         footer:style.about_info_prof_footer
     }







    return(
        <section className={style.about_info}>

            <AboutInfoCard  {...cardStyleClassic} />
            <AboutInfoCard  {...cardStyleReact}/>
            <AboutInfoCard  {...cardStyleProf} />


            <button className={style.about_info_button}>
                <Link to='/'>Назад</Link>
            </button>

        </section>)


}

export default AboutInfo;