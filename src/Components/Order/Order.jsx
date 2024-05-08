import style from '../../global.module.scss';
import Consult from "../Consultation/Consult";
import {useState} from "react";
import {useContext} from "react";
import {Context} from "../../Context/Context";

const Order = () => {

const consult = useContext(Context);

const {consultWindowVisible ,setConsultWindowVisible} = consult;


console.log(consultWindowVisible)





    return(<>

        <button  onClick={() => {


setConsultWindowVisible(true);

        }



        }  className={style.order}>ЗАКАЗАТЬ КОНСУЛЬТАЦИЮ</button>

        {consultWindowVisible?<Consult    />:null}

</>)
}

export default Order;