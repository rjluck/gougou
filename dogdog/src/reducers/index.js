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
import videoImgReducer from './videoImgReducer';
import videoWordReducer from './videoWordReducer';
import videoReducer from './videoReducer';
import ewordReducer from './ewordReducer';
import textReducer from './textReducer';
import userReducer from './userReducer';
import listReducer from './listReducer';
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
    video_img: videoImgReducer,
    video_word: videoWordReducer,
    video: videoReducer,
    e_word: ewordReducer,
    text: textReducer,
    user: userReducer,
    list1_img_one:listReducer

})

 
export default reducers;