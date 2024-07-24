import './Email.css';
import {sendRequest} from "../../bot/bot";
import {useEffect, useRef, useState} from "react";
import style from '../../global.module.scss';
import MessageConfirm from "../MessageConfirm/MessageConfirm";
import { useContext } from "react";
import Context from '../../Context/Context'


const Email = (props) => {




   console.log(Context)



    const ref= useRef();

    const[msg,setMsg]=useState('Здесь будет сообщение')







    return (<>





            <form action="">
                <input placeholder={props.placeholder}  ref={ref}  className='email-text' type="text"/>
                <input  className='email-submit' onClick={(e)=>{
                    e.preventDefault();
                   //validation

                    if(ref.current.value.length < 12){
                        // throw new Error('Ваше сообщение слишком короткое')

                    }else{
                        setMsg(ref.current.value)
                       setConfirmMessage(true);
                    }


            }} value={'Отправить'} type="submit"/>
            </form>

    <MessageConfirm  refInfo={ref}  msg={msg} visible={confirmMessage ?style.message_confirm:'none'}  />





        </>
    )
}

export default  Email;