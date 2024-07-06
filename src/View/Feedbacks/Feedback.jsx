import {useState} from "react";
import style from '../../global.module.scss';
import parse from "html-react-parser";

const Feedback = () => {

const elem = parse('<img src="./feedbackwhiteicon.png" alt=""/>');



    const [feedbacks,setFeedbacks] = useState([]);




    return (
        <section className={style.feedbacks}>


        </section>
    )
}

export default Feedback;