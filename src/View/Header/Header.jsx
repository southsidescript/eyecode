import style from '../../global.module.scss'
import {useState,useEffect,useRef} from "react";
import Email from "../../Components/Email/Email";
import Order from "../../Components/Order/Order";
import {Link} from "react-router-dom";


const Header = () => {

     const [mobileMode,setMobileMode] = useState(window.matchMedia("(max-width: 768px)").matches);

     const [mediaQuery,seyMediaQuery] = useState(window.matchMedia('(max-width: 768px)'));

     const [navList,setnavList] = useState([
        'About',
        'Courses',
        'Contacts',
        'Feedbacks',
        'FAQ'
    ])


    useEffect(() => {

      mediaQuery.addEventListener('change', (e) => {

            setMobileMode(e.matches);



      });




    }, []);










    return(
        <header className={style.header}>
            <Link to={'/'}>
                <div className={style.logo}>
                    <img src="./eyelogov6.png" alt=""/>
                </div>

            </Link>


            <nav className={mobileMode? style.navMobile : 'none'}>

                <ul>
                    {navList.map((n,index) => {
                         return <li key={index}> <a href={`#${n.toLowerCase()}`}>{n}</a></li>
                    })}
                </ul>
            </nav>

               <div>
                  <Order/>
               </div>

        </header>
    )




}


export default  Header;
