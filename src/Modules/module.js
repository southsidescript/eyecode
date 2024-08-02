import style from "../global.module.scss";




export function parser(elems){
    let result = elems.map(n=> <li className={style.material_info} key={n}>{n}</li>);
    return result;

}


let classic = ['HTML5','CSS3','JavaScript','Sass','Less','БЭМ','Адаптивная верстка','Телеграм группа'];
let react = ['Классический модуль +','React','Алгоритмы структуры данных','NPM(Node package manager)','MUI','Ant Design','WhatsApp Группа','до 4 часов индивидуальных zoom конференций со спикером',]
let professional = ['Реактивный модуль +','до 10 часов индивидуальных zoom конференций со спикером','Функциональное программирование','ООП','ИИ помощники (Copilot,gigacode,gpt-40']





export  const modules = [
    {   style:style.courses_classic_card,
        headerStyle:style.courses_classic_card_header,
        titleStyle:style.courses_classic_card_title,
        title:'Классический модуль',
        duration:'Длительность: 6 месяцев',

    },
    {
        style:style.courses_react_card,
        title:'Реактивный модуль',
        headerStyle:style.courses_classic_card_header,
        titleStyle:style.courses_classic_card_title,
        duration:'Длительность: 12 месяцев'

    },
    {
        style:style.courses_prof_card,
        headerStyle:style.courses_classic_card_header,
        titleStyle:style.courses_classic_card_title,
        title:'Профессиональный модуль',
        duration:'Длительность:18 месяцев'
    },
    {
        style:style.about_info_classic,
        title:'Классический модуль',
        header:style.about_info_classic_header,
        main:style.about_info_classic_main,
        description:parser(classic),
        footer:style.about_info_classic_footer,
        price: <div>5000₽</div>,
        duration:6 + ' месяцев',
        state:[10,25,40]


    },
    {  style:style.about_info_react,
        title:'React модуль',
        header:style.about_info_react_header,
        main:style.about_info_classic_main,
        description:parser(react),
        footer:style.about_info_react_footer,
        price:<div><del>7500₽</del> <br /> 6500₽</div>,
        duration:12 + ' месяцев',
        state:[1000,1050,1500]
    },
    {
        style:style.about_info_prof,
        title:'Профессиональный модуль',
        header:style.about_info_prof_header,
        main:style.about_info_classic_main,
        description:parser(professional),
        footer:style.about_info_prof_footer,
        price: <div><del>8500₽</del> <br /> 7500₽</div> ,
        duration:18 + '  месяцев',
        more:'Платный телеграм канал',
        state:[40,35,40]

    }
];




