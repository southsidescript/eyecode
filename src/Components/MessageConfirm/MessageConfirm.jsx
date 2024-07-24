import React from'react';
import style from '../../global.module.scss';
import {useRef} from "react";
import {sendRequest} from "../../bot/bot";





const MessageConfirm = (props) => {


     const ref = useRef();




    return(
        <div className={props.visible}>
            <h3><img src="./github_social.png" alt=""/> Куда вам выслать ответ ?</h3>




            <div className={style.message_confirm_form}>
                <input  ref={ref} type="text" className={style.message_confirm_email}

                       placeholder={'Ваша электронная почта либо t.me'}/>

                <button className={style.message_confirm_btn} onClick={(e)=>{


                sendRequest(e,props.refInfo,props.msg,ref.current.value);


                }}>

                    <img src="./send.png" alt=""/>
                </button>


            </div>


        </div>


    )


 }


export default MessageConfirm;