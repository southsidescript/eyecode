import style from '../../global.module.scss';
import { Select, Space } from 'antd';
import {useState} from "react";
import {useContext} from "react";
import {Context} from "../../Context/Context";







const Consult = () => {

    const consult = useContext(Context);
    const { consultWindowVisible ,setConsultWindowVisible} = consult;

    const [order,setOrder]=useState({order:null})

    const handleChange = (value) => {
        const selectedValue = value;
        console.log(`selected ${value}`);

        if( selectedValue === 'call_consult'){
          setOrder({order:'call_consult'})
        }
        if( selectedValue === 'video_consult'){

            setOrder({order:'video_consult'})
        }
    };







return(

    <div className={style.consult}>

      <div className={style.consult_closewindow} onClick={()=>{
          setConsultWindowVisible(false);
      }}>

          &#10006;

      </div>
        <div className='headercons'>Заказать консультацию</div>

        <img src="./eyelogov6.png" alt=""/>

        <form action="">
        <input type='text' placeholder="Имя"/>
            <input type='text' placeholder="+7 (xxx) xxx-xx-xx"/>
            Выберите тип консультации:


            <Space wrap>
                <Select


                    className={style.select}
                    defaultValue="Звонок"
                    style={{
                        width: 220,
                    }}
                    onChange={handleChange}
                    options={[
                        {
                            value: 'call_consult',
                            label: 'Звонок',
                        },
                        {
                            value: 'video_consult',
                            label: 'Видео консультация',
                        }
                    ]}
                />


            </Space>


            <button  disabled={order.order===null?true:false}>{order.order==='video_consult'?
                <span>499₽  <del>1000₽</del> </span> : 'Беслпатно'}</button>



            {/*<select>*/}
            {/*    <option value="text">Звонок по телефону</option>*/}
            {/*    <option value='zoom'>Видео консультация</option>*/}
            {/*</select>*/}





        </form>


    </div>)








}
export default Consult;