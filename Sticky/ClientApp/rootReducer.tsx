import { combineReducers } from 'redux'
import stickyReducer from './components/sticky/stickyReducer';
import stickerReducer from './components/sticker/stickerReducer';

export default combineReducers({
    stickyReducer,
    stickerReducer
});