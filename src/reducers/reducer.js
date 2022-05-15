import Actions from "../actions/action"
// Reducer -----

const reducer=(state,action)=>{
    //  Reducers --->
    switch (action.type){
        case Actions.INCREMENT:{
            return state.value=state.value+1;
        }  ;


        case Actions.DECREMENT:{
            return state.value=state.value-1;
        } ;
        
        default:{
            return state;
        }

    }

}

export default  reducer;