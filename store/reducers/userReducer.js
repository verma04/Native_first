import { GETCATEGORY , BOOKING_USER_LIST, BOOKING, LIST_DET, GETLIST , OTHERSER } from "../actons/types";



const initialState = {
 category:null,
 other:null,
 list:null,
 list_det:null,
 booking:null,

};

export default function(state = initialState, action) {
  switch (action.type) {
  
    case GETCATEGORY:
      return {
        ...state,
        category: action.payload
      };

      case OTHERSER:
        return {
          ...state,
          other: action.payload
        };
        case GETLIST:
          return {
            ...state,
            list: action.payload
          };
    
          case LIST_DET:
            return {
              ...state,
              list_det: action.payload
            };

            case BOOKING:
              return {
                ...state,
                booking: action.payload
              };
              case  BOOKING_USER_LIST:
                return {
                  ...state,
                  booking: action.payload
                };
            
          
    default:
      return state;
  }
}