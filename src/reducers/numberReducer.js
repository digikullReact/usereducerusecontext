
function reducer(state, action) {
    switch (action.type) {
      case 'increment':
        return {count: state.count + 1};
      case 'decrement':
        return {count: state.count - 1};
      default:
        throw new Error();
    }
  }


  export function Changereducer(state, action) {

    // Changes defined to be happened in state --when any action is dispatched
   
    switch (action.type) {
      case 'name':
        return {...state,name:action.payload};
      case 'email':
        return {...state,email:action.payload};

        case 'add':
            debugger;

            return {...state,records:[...state.records,action.payload]};  
      default:
        throw new Error();
    }
  }


  export default reducer;
