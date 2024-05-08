import './Email.css';
import {sendRequest} from "../../bot/bot";
import {useRef, useState} from "react";
const Email = (props) => {



    const ref= useRef()
    const [valid,setValid] = useState(false);



    return (
        <>




            <form action="">
                <input placeholder={props.placeholder}  ref={ref}  className='email-text' type="text"/><input className='email-submit' onClick={(e,)=>{

                   //validation


                {ref.current.value === ''?alert('Укажите пожалуйста ваш email'):     sendRequest(e,ref);}
                



            }} value={'Отправить'} type="submit"/>
            </form>
        




        </>
    )
}

export default  Email;