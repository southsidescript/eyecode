import style from '../../global.module.scss'
import {useState} from "react";
import Email from "../../Components/Email/Email";
import Order from "../../Components/Order/Order";



const Header = () => {

    const [navList,setnavList] = useState([
        'About',
        'Courses',
        'Contacts',
        'Feedbacks',
        'FAQ'
    ])



    return(
        <header className={style.header}>

            <div className={style.logo}>
                <img src="./eyelogov6.png" alt=""/>
            </div>

            <nav className={style.nav}>

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
