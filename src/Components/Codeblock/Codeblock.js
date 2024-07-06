import React, {useState ,useEffect} from 'react';
import ReactDOM from "react-dom/client";
import  style from '../../global.module.scss';


const Codeblock = ({children}) => {

    
const [codeblock, setCodeblock]  =  useState([]);


    useEffect(() => {
        setCodeblock([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,])
    }, []);




    return(
        <section className={style.codeblock}>


            <div className={style.codeblock_header}>
                <div></div>
                <div></div>
                <div></div>
            </div>

            <div className={style.codeblock_body}>
                <div className={style.codeblock_body_counter}>
                    < div className={style.codeblock_body_icons}>
                        <img src="./copyfile.svg" alt=""/><img src="./searchicon.svg" alt=""/> <img src="./git.svg"
                                                                                                    alt=""/><img
                        src="./debug.svg" alt=""/>


                        <img className='choise_elements'  src="./qrcode.svg" alt=""/>
                    </div>
                    <ul>
                    {codeblock.map((item,index) => {
                            return(
                                <li key={index}>
                                    <span>{index+1}</span>
                                </li>
                            )
                        })
                        }
                    </ul>
                </div>
                <div className={style.codeblock_body_content}>
                    {children}
                </div>
            </div>

            <div className={style.codeblock_footer}>
                <img src="./git_branch_footer.svg" alt=""/> main <img src="./circle.svg" alt=""/>0 <img src="./error_icon.svg" alt=""/> 0
            </div>



        </section>
    )





}




export default  Codeblock;