import style from '../../global.module.scss';


const Line = (props) => {

   return(
       <div className={style.linemap}>
           <div className={style.linemap_icon}>{props.theme}</div>
           <div className={props.style}></div>
    </div>


)


}

export default Line;