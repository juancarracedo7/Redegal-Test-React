import { GET_ALL_PHONES, GET_PHONE_BY_ID } from "./actions";

const initialState = {
    phones: [],
    details: [],
    cart: 0
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_PHONES:
            return {
                ...state,
                phones: action.payload,
            };
            case GET_PHONE_BY_ID:
                return {
                    ...state,
                    details: action.payload,
                };
      default: {
        return state;
      }
    }
  };
  
  export default rootReducer;