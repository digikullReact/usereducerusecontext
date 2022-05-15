import React,{useReducer,useState} from 'react'
import reducer, { Changereducer } from '../reducers/numberReducer';

import { initialState } from '../store/store';


const Home = () => {
    const [state, dispatch] = useReducer(Changereducer, initialState);
   //const [state,setState]=useState(initialState);

    const handleClickInc=()=>{
        dispatch({type:"increment"})

        //setState({count:state.count+1})

    

    }

    const handleClickDec=()=>{
        //setState({count:state.count-1})
        dispatch({type:"decrement"})


     
    }

    const handleChange=(event)=>{
        if(event.target.name=="name"){

            dispatch({type:"name",payload:event.target.value})
        }
        else if(event.target.name=="email"){
            dispatch({type:"email",payload:event.target.value})

        }
      

    }

    const submit=()=>{
        dispatch({type:"add",payload:{name:state.name,email:state.email}})

    }
  return (
    <div>

        {state.records?.map(ele=>(
            <h1>{ele.name}</h1>
        ))}

        <h1>{state.count}</h1>
     <button  onClick={handleClickInc}>

         Increment ME
     </button>


     <button onClick={handleClickDec}>

Decrement ME
</button>


<input type="text" name='name' value={state.name}  onChange={handleChange}/>

<input type="text" name='email' value={state.email}  onChange={handleChange}/>

<button onClick={submit}>
    Submit
</button>



    </div>
  )
}

export default Home