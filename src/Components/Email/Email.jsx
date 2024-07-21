import './Email.css';
import {sendRequest} from "../../bot/bot";
import {useEffect, useRef, useState} from "react";
import style from '../../global.module.scss';
import MessageConfirm from "../MessageConfirm/MessageConfirm";


const Email = (props) => {



    const [valid,setValid] = useState(false);

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
                        setValid(current => true)
                    }


            }} value={'Отправить'} type="submit"/>
            </form>

    <MessageConfirm   visible={valid?style.message_confirm:'none'}  />





        </>
    )
}

export default  Email;