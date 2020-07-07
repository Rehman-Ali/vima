import { combineReducers } from 'redux';
import auth from './auth';
import news from './news';
import compaign from './compaign';

export default combineReducers({
    auth,
    news,
    compaign
});
