import { ISticker, IStickerState } from "./sticker";
import { Dispatch, Action } from 'redux';
import { ISetStickerPositionAction } from "./stickerActions";
import { STICKER_TO_DB, STICKER_SET_POSITION } from './stickerConstants';

export const initalSticker: IStickerState = {
    type: '',
    payload: {
        sticker: {
            id: -1,
            date: new Date(),
            left: 0,
            top: 0,
            title: '',
            text: '',
            color: 'red'
        },
        error: ''
    }    
}

export default function stickerReducer(state: IStickerState = initalSticker, incomingAction: Action): IStickerState {
    const action = incomingAction as ISetStickerPositionAction;
    switch (action.type) {        
        case STICKER_SET_POSITION:
            let res: IStickerState = {
                type: state.type,
                payload: {
                    sticker: { ...state.payload.sticker },
                    error: state.payload.error
                }
            }
            res.payload.sticker.left = action.position.left;
            res.payload.sticker.top = action.position.top;

            return res;
        default:
            return state;
    }
}