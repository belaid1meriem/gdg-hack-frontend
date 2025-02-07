import { createContext,useState } from "react";

export const indicatorsContext= createContext();

const IndicatorsContextProvider=({children})=>{
    const [errorMsg,setErrorMsg]=useState(null);
    const [loading,setLoading]=useState(false);
    
    // const [successMsg,setSuccessMsg]=useState(null);
   
    // successMsg,setSuccessMsg,



    return(
        <indicatorsContext.Provider value={{
            errorMsg,setErrorMsg,
            loading,setLoading
            }}>
            {children}
        </indicatorsContext.Provider>
    )
}

export default IndicatorsContextProvider;