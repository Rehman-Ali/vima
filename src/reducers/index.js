import { combineReducers } from 'redux';
import auth from './auth';
import news from './news';
import compaign from './compaign';
import donationProduct from './donationProduct';
import ourProduct from './ourProduct';
import cart from './cart';


export default combineReducers({
    auth,
    news,
    compaign,
    donationProduct,
    ourProduct,
    cart
});
