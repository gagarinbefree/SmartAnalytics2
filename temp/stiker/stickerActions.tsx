import { Dispatch, Action } from 'redux';
import { STICKER_TO_DB, STICKER_SET_POSITION } from './stickerConstants';
import { IStickerState, ISticker } from '../stiker/sticker';

export interface ISetStickerPositionAction {
    type: string;
    position: {
        left: number;
        top: number;
    }
}

export function setStickerPosition(left: number, top: number) {    
    return (dispatch: Dispatch<ISetStickerPositionAction>): void => {
        dispatch({
            type: STICKER_SET_POSITION,
            position: {
                left: left,
                top: top
            }
        });
    }
}