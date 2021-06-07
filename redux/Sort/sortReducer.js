import { SET_ORDER,SET_ORDERBY,SET_FILTER } from "./sortType"

const initialState={
    order:'asc',
    orderBy:'name',
    filter:''
}

const sortReducer=(state=initialState,action)=>
{
    switch(action.type)
    {
        case SET_ORDER:
          return{
              ...state,
                order:action.payload,
            }
        
        
        case SET_ORDERBY:
            return{
                ...state,
            orderBy:action.payload
            }
            case SET_FILTER:
                return{
                    ...state,
                      filter:action.payload,
                  }
           
        default : return state
                  

    }
}

export default sortReducer;