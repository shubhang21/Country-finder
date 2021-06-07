import { FETCH_DATA_REQUEST,FETCH_DATA_ERROR, FETCH_DATA_SUCCESS } from "./countryTypes"

const initialState={
    loading:false,
    countries:[],
    error:''
}

const countryReducer=(state=initialState,action)=>
{
    switch(action.type)
    {
        case FETCH_DATA_REQUEST:
          return{
              ...state,
                loading:true,
            }
        case FETCH_DATA_SUCCESS:
          return{
                loading:false,
                countries:action.payload,
                error:'hi'
            }
        case FETCH_DATA_ERROR:
            return{
            loading:false,
            countries:[],
            error:action.payload
            }
        default : return state
                  

    }
}

export default countryReducer;