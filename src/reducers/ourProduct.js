import { ALL_OUR_PRODUCT_FAIL, ALL_OUR_PRODUCT_SUCCESS  } from "../actions/types";

const initialState = {
  allOurProduct: [],
  
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case ALL_OUR_PRODUCT_SUCCESS:
      return {
        ...state,
        allOurProduct: payload,
      };
    case ALL_OUR_PRODUCT_FAIL:
      return {
        ...state,
        allOurProduct: [],
      };
       
    default:
      return {
        ...state,
      };
  }
}
