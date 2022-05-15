import {createContext,useState} from 'react'

const ToggleContext = createContext()

export const ToggleProvider =({children}) =>{

    const [lang,setlang] = useState("th");

    const ChangeLang = (lan) =>{
        if(lan === true){
            setlang("th")
        }else{
            setlang("en")
        }
    }

    return (<ToggleContext.Provider
    value={{
       lang,
       setlang,
       ChangeLang
    }}>
        {children}
    </ToggleContext.Provider>
    )

}
export default ToggleContext