//tme bot token:6032364716:AAEz8J-3C9iZad0Ut5nBd6wBWOBtE4Dg2ZM
//https request = https://api.telegram.org/bot123456:ABC-DEF1234ghIkl-zyx57W2v1u123ew11/sendMessage
//myid=688804750
//message:chat_id=12345&text=hello%20friend
//https://api.telegram.org/bot6032364716:AAEz8J-3C9iZad0Ut5nBd6wBWOBtE4Dg2ZM/sendMessage?chat_id=688804750&text=hello


 export function sendRequest(e,ref){

let xhr = new XMLHttpRequest();
    let token = '6576291190:AAF8e0X2OuXTktqLOR0UFcM54EnLNXgAJuM';
    let userid = '688804750lf';
    let message = ref.current.value;
    let url =`https://api.telegram.org/bot${token}/sendMessage?chat_id=${userid}&text=${message}`
    xhr.open('POST',url,true);
    xhr.send(null);
    e.preventDefault();
    ref.current.value = '';
}