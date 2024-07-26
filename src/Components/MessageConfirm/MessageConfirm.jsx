import React, {useEffect} from 'react';
import style from '../../global.module.scss';
import {useRef} from "react";
import {sendRequest} from "../../bot/bot";
import  {Context } from "../../Context/Context";
import {useContext} from "react";






const MessageConfirm = (props) => {



    const context = useContext(Context);

    const { messageConfirm,setMessageConfirmation} =  context;

    useEffect(() => {


        if(!localStorage.getItem('email')){
            return;
        }else{
            let result =   localStorage.getItem('email');
            ref.current.value = result ;

        }

    }, []);



    const ref = useRef();

    let refInfo = localStorage.getItem('email');


    return(



        <div className={props.visible}>
            <h3><img src="./github_social.png" alt=""/> Куда вам выслать ответ ?</h3>




            <div className={style.message_confirm_form}>
                <input  ref={ref} type="text" className={style.message_confirm_email}

                       placeholder={'Ваша электронная почта либо t.me'}/>

                <button className={style.message_confirm_btn} onClick={(e)=>{


                sendRequest(e,props.refInfo,props.msg,ref.current.value);
                setMessageConfirmation(false);
                localStorage.setItem('email',ref.current.value);


                }}>

                    <img src="./send.png" alt=""/>
                </button>


            </div>


        </div>


    )


 }


export default MessageConfirm;