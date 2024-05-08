import CreateContext, {createContext, useState} from 'react';




export const Context = createContext();




const ContextConn = ({children}) => {

 const [theme,setTheme] = useState([
     {dark:'black',
      light:'light'}
 ])



    const [consultWindowVisible,setConsultWindowVisible] = useState(false)

    console.log(theme,consultWindowVisible)


    return(
        <Context.Provider value={{theme,consultWindowVisible,setConsultWindowVisible}}>{children}</Context.Provider>
    )




};


export default ContextConn;