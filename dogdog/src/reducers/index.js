import {combineReducers} from 'redux';
import sliderReducer from './sliderReducer';
import menuReducer from './menuReducer';
import goodsReducer from './goodsReducer';
import surpriseReducer from './surpriseReducer';
import rightReducer from './rightReducer';
import fireTitleReducer from './fireTitleReducer';
import fireLimgReducer from './fireLimgReducer';
import fireSimgReducer from './fireSimgReducer';
import videoTitleReducer from './videoTitleReducer';
import videoInfoReducer from './videoInfoReducer';
import videoWatchReducer from './videoWatchReducer';
import videoReducer from './videoReducer';
import ewordReducer from './ewordReducer';
import textReducer from './textReducer';
import userReducer from './userReducer';
import listReducer from './listReducer';
import Goods1Reducer from './Goods1Reducer';
//combineReducers合并多个reducers

const reducers = combineReducers({
	slider : sliderReducer,
	menu : menuReducer,
	goods: goodsReducer,
	surprise : surpriseReducer,
	right: rightReducer,
    fire_title: fireTitleReducer,
    fire_limg: fireLimgReducer,
    fire_simg: fireSimgReducer,
    video_title: videoTitleReducer,
    video_info: videoInfoReducer,
    video_watch: videoWatchReducer,
    video: videoReducer,
    e_word: ewordReducer,
    text: textReducer,
    user: userReducer,
    goods1: Goods1Reducer,
    list1_img_one:listReducer

})

 
export default reducers;