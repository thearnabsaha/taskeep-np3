import { createContext,useReducer,useContext } from "react";
import { reducer } from './reducer';
const AppContext=createContext()
const useGlobalContext=()=>{
    return useContext(AppContext)
}
const AppProvider = ({children}) => {
    const initialState={
        task:[]
    }
    const [state, dispatch] = useReducer(reducer,initialState)
    const value={...state,dispatch}
    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}
export {AppProvider,useGlobalContext};