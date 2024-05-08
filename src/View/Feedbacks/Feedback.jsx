import {useState} from "react";
import style from '../../global.module.scss';
import parse from "html-react-parser";
import Line from "../../Components/LineMap/Line";
const Feedback = () => {

const elem = parse('<img src="./feedbackwhiteicon.png" alt=""/>');



    const [feedbacks,setFeedbacks] = useState([]);
    const lineStyle = {
        theme:elem,
        style:style.linemap_line_feedbacks
    }



    return (
        <section className={style.feedbacks}>
           <Line { ...lineStyle}/>

        </section>
    )
}

export default Feedback;