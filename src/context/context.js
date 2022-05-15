import { createContext ,useReducer} from "react";
import reducer from "../reducers/reducer";

import { State } from "../actions/action";


const MainContext=createContext();


const Provider =({})=>{

    const [state, dispatch] = useReducer(reducer,State);


    incrementME:()=>{
        dispatch({type:"INCREMENT"});
    };


    decrementME:()=>{
        dispatch({type:"DECREMENT"});
    };

}


