/*import produce from "immer";
import { getCardColor } from "../common";
import { Action, Reducer } from 'redux';
import { STICKER_SET_POSITION, STICKER_CHANGE_COLOR, STICKER_INIT } from "./stickerConstants";
import { IStickerInitAction } from "./stickerActions";
import { create } from "jss";

export const initSticky: IStickerState = {
    type: '',
    payload: {
        classes: {},
        sticker: {
            index: -1,
            id: -1,
            date: new Date(),
            x: -1,
            y: -1,
            title: '',
            note: '',
            color: '',
            issaved: false
        }
    }
}






    (
    state = initSticky, inAction: Action): IStickerState =>
        if (inAction.type == STICKER_SET_POSITION) {
            let action: ISetStickerPositionAction = inAction as ISetStickerPositionAction;

            draft.payload.sticker.x = action.pos.x;
            draft.payload.sticker.y = action.pos.y;
        }
        else if (inAction.type == STICKER_CHANGE_COLOR) {

            debugger;

            draft.payload.sticker.color = getCardColor(draft.payload.sticker.color);
        }
        else if (inAction.type == STICKER_INIT) {
            let action: IStickerInitAction = inAction as IStickerInitAction;

            draft.payload.sticker = action.sticker;
        }
    }
);

export default stickerReducer;*/