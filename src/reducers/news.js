import { ALL_NEWS_FAIL, ALL_NEWS_SUCCESS ,NEWS_DETAIL, EDIT_NEWS_SUCCESS} from "../actions/types";

const initialState = {
  allNews: [],
  editNews:[],
  newsDetail:[]
  
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case ALL_NEWS_SUCCESS:
      return {
        ...state,
        allNews: payload,
      };
    case ALL_NEWS_FAIL:
      return {
        ...state,
        allNews: [],
      };
      case EDIT_NEWS_SUCCESS:
        return {
          ...state,
          editNews:[payload] 
        };
        case NEWS_DETAIL:
        return {
          ...state,
          newsDetail:[payload] 
        };
        
       
    default:
      return {
        ...state,
      };
  }
}
