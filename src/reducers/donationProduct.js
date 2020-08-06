import { ALL_DONATION_PRODUCT_FAIL, ALL_DONATION_PRODUCT_SUCCESS,  ALL_DONATION_PRODUCT_HISTORY_FAIL, ALL_DONATION_PRODUCT_HISTORY_SUCCESS  } from "../actions/types";

const initialState = {
  allDonationProduct: [],
  allDonationProductHistory: [],
  
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case ALL_DONATION_PRODUCT_SUCCESS:
      return {
        ...state,
        allDonationProduct: payload,
      };
    case ALL_DONATION_PRODUCT_FAIL:
      return {
        ...state,
        allDonationProduct: [],
      };
      case ALL_DONATION_PRODUCT_HISTORY_SUCCESS:
        return {
          ...state,
          allDonationProductHistory: payload,
        };
      case ALL_DONATION_PRODUCT_HISTORY_FAIL:
        return {
          ...state,
          allDonationProductHistory: [],
        };
       
    default:
      return {
        ...state,
      };
  }
}
