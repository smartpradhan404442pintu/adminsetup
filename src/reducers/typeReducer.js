


const initialState={};

export default function insertReducer(state=initialState,action)
{

     return{
        ...state,
        insert:action.payload
     }
}