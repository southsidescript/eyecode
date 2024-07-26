
import Header from "./View/Header/Header";
import Loading from "./View/Loading/Loading";
import {useEffect, useState} from "react";
import Main from "./View/Main/Main";
import './global.css';
import ContextConn from "./Context/Context";
import {BrowserRouter, Route, Router, Routes} from "react-router-dom";
import AboutInfo from "./View/AboutInfo/AboutInfo";
import Contacts from "./View/Contacts/Contacts";
import Footer from "./View/Footer/Footer";



const App = () => {
   const [ loadState,setLoadState] = useState([
       '1%','56%','99%','100%'
   ])
    
    const [counter,setCounter] =useState(0)
    
    const [loadVisible,setLoadVisible] = useState(true);;

    useEffect(() => {

        const images = document.querySelectorAll('img');
        console.log(images)


        images.forEach((image) => {
            image.addEventListener('dragstart', (e) => {

                e.preventDefault();
                return false;

            }, false);

            setTimeout(() => {
                setCounter(counter + 1)
                setTimeout(() => {
                    setCounter(counter + 3)
                    setLoadVisible(!loadVisible)
                }, 1000)
            }, 1000)

        });
        }, []);

        return (<>
            <ContextConn>
   

         
              <Loading spin={loadVisible} loadstate={loadState[counter]}/>            



               <BrowserRouter>
                   <Header/>
                   <Routes>
                       <Route path="/" element={<Main/>} />
                       <Route path="/about" element={<AboutInfo/>} />
                   </Routes>
               </BrowserRouter>

                <Contacts/>
                <Footer/>
            </ContextConn>

        </>);


    }

export default App;