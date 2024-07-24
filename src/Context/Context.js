import CreateContext, {createContext, useState} from 'react';




export const Context = createContext();





const ContextConn = ({children}) => {

 const [theme,setTheme] = useState([
     {dark:'black',
      light:'light'}
 ])


    const [consultWindowVisible,setConsultWindowVisible] = useState(false)

    const [messageConfirm ,setMessageConfirmation] = useState(false);



    return(
        <Context.Provider value={{theme,consultWindowVisible,setConsultWindowVisible,messageConfirm,setMessageConfirmation}}>{children}</Context.Provider>
    )




};


export default ContextConn;