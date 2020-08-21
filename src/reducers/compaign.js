import { ALL_COMPAIGN_FAIL, COMPAIGN_DETAIL ,ALL_COMPAIGN_SUCCESS , EDIT_COMPAIGN_SUCCESS} from "../actions/types";

const initialState = {
  allCompaign: [],
  editCompaign:[],
  detailCompaign:[]
  
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case ALL_COMPAIGN_SUCCESS:
      return {
        ...state,
        allCompaign: payload,
      };
    case ALL_COMPAIGN_FAIL:
      return {
        ...state,
        allCompaign: [],
      };
      case EDIT_COMPAIGN_SUCCESS:
        return {
          ...state,
          editCompaign:[payload] 
        };
      
        case COMPAIGN_DETAIL:
        return {
          ...state,
          editCompaign:[payload] 
        };
      
    default:
      return {
        ...state,
      };
  }
}
