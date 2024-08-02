import CreateContext, {createContext, useState} from 'react';




export const Context = createContext();





const ContextConn = ({children}) => {

 const [theme,setTheme] = useState([
     {dark:'black',
      light:'light'}
 ])

    const [mobilemode,setMobilemode] = useState(false);


    const [consultWindowVisible,setConsultWindowVisible] = useState(false)

    const [messageConfirm ,setMessageConfirmation] = useState(false);



    return(
        <Context.Provider value={{mobilemode,setMobilemode,theme,consultWindowVisible,setConsultWindowVisible,messageConfirm,setMessageConfirmation}}>{children}</Context.Provider>
    )




};


export default ContextConn;