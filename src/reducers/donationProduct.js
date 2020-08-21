import { ALL_DONATION_PRODUCT_FAIL,DONATION_PRODUCT_REQUEST, ALL_DONATION_PRODUCT_SUCCESS,  ALL_DONATION_PRODUCT_HISTORY_FAIL, ALL_DONATION_PRODUCT_HISTORY_SUCCESS  } from "../actions/types";

const initialState = {
  allDonationProduct: [],
  allDonationProductHistory: [],
  donationRequestProduct: [],
  
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
        case DONATION_PRODUCT_REQUEST:
          return {
            ...state,
            donationRequestProduct: [payload],
          };

    default:
      return {
        ...state,
      };
  }
}
