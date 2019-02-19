import { IStickyState } from "./sticky";
import {
    STICKY_ADD_STICKER,
    STICKY_SET_STICKER_POSITION,
    STICKY_CHANGE_STICKER_COLOR,
    STICKY_DELETE_STICKER,
    STICKY_TITLE_CHANGE,
    STICKY_NOTE_CHANGE,
    STICKY_SAVE_STICKER,
    STICKY_UPDATE_STICKER,    STICKY_LOAD_STICKERS} from "./stickyConstants";
import { Action, Reducer } from 'redux';
import { IAddStickerAction, ISetStickerPositionAction, IStickerAction, ITextChangeStickerAction, IDbStickerAction, IDbStickersAction } from "./stickyActions";
import { ISticker } from "../sticker/sticker";
import { getCardColor } from "../common";
import produce from "immer";

export const initSticky: IStickyState = {
    type: '',
    payload: {
        stickers: new Array<ISticker>()
    }
}

export const stickyReducer: Reducer<IStickyState> = (state: IStickyState = initSticky, inAction: Action): IStickyState =>
    produce(state, draft => {    
        if (inAction.type == STICKY_ADD_STICKER) {
            const action = inAction as IAddStickerAction;

            draft.payload.stickers.push({
                index: action.index,
                id: 0,
                date: new Date(),
                x: 0,
                y: action.top,
                title: '',
                note: '',
                color: getCardColor(),
                issaved: false
            });
        }
        /*else if (inAction.type == STICKY_SET_STICKER_POSITION) {
            const action = inAction as ISetStickerPositionAction;

            let res: IStickyState = deepCopy(state);

            let sticker: ISticker | undefined = res.payload.stickers.find(item => item.index == action.index);
            if (sticker) {
                sticker.x = action.pos.x;
                sticker.y = action.pos.y;
                sticker.issaved = false;
            }

            return res;
        }
        else if (inAction.type == STICKY_CHANGE_STICKER_COLOR) {
            const action = inAction as IStickerAction;

            let res: IStickyState = deepCopy(state);

            let sticker: ISticker | undefined = res.payload.stickers.find(item => item.index == action.index);
            if (sticker) {
                sticker.color = getCardColor(sticker.color);
                sticker.issaved = false;
            }

            return res;
        }
        else if (inAction.type == STICKY_DELETE_STICKER) {
            const action = inAction as IDbStickerAction;

            let res: IStickyState = deepCopy(state);

            let ii: number = res.payload.stickers.findIndex(item => item.index == action.sticker.index);
            if (ii >= 0) {
                res.payload.stickers.splice(ii, 1);          
            } 

            return res;
        }
        else if (inAction.type == STICKY_TITLE_CHANGE) {
            const action = inAction as ITextChangeStickerAction;

            let res: IStickyState = deepCopy(state);

            let sticker: ISticker | undefined = res.payload.stickers.find(item => item.index == action.index);
            if (sticker) {
                sticker.title = action.text;
                sticker.issaved = false;
            }

            return res;
        }
        else if (inAction.type == STICKY_NOTE_CHANGE) {
            const action = inAction as ITextChangeStickerAction;

            let res: IStickyState = deepCopy(state);

            let sticker: ISticker | undefined = res.payload.stickers.find(item => item.index == action.index);
            if (sticker) {
                sticker.note = action.text;
                sticker.issaved = false;
            }

            return res;
        }
        else if (inAction.type == STICKY_SAVE_STICKER) {
            const action = inAction as IDbStickerAction;

            let res: IStickyState = deepCopy(state);

            let sticker: ISticker | undefined = res.payload.stickers.find(item => item.index == action.sticker.index);
            if (sticker) {
                sticker.id = action.sticker.id;
                sticker.issaved = true;
            }

            return res;
        }
        else if (inAction.type == STICKY_UPDATE_STICKER) {
            const action = inAction as IDbStickerAction;

            let res: IStickyState = deepCopy(state);

            let sticker: ISticker | undefined = res.payload.stickers.find(item => item.index == action.sticker.index);
            if (sticker) {
                sticker.issaved = true;
            }

            return res;
        }
        else if (inAction.type == STICKY_LOAD_STICKERS) {
            const action = inAction as IDbStickersAction;

            let res: IStickyState = deepCopy(state);

            action.stickers.forEach((sticker: ISticker, index: number) => {
                res.payload.stickers.push({
                    index: sticker.index,
                    id: sticker.id,
                    date: sticker.date,
                    x: sticker.x,
                    y: sticker.y,
                    title: sticker.title,
                    note: sticker.note,
                    color: sticker.color,
                    issaved: true
                });
            });
        
            return res;
        }*/
        //else
        //    return state;
    }
);

function deepCopy(state: IStickyState): IStickyState {
    let res: IStickyState = {
        type: state.type,
        payload: {
            stickers: state.payload.stickers.slice()
        }
    }

    return res;
}

export default stickyReducer;