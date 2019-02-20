import produce from "immer";
import { IStickerState } from "./sticker";
import { getCardColor } from "../common";
import { Action, Reducer } from 'redux';
import { STICKER_SET_POSITION, STICKER_CHANGE_COLOR, STICKER_INIT } from "./stickerConstants";
import { ISetStickerPositionAction, IStickerAction } from "../sticky/stickyActions";
import { IStickerInitAction } from "./stickerActions";

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

export const stickerReducer: Reducer<IStickerState> = (state = initSticky, inAction: Action): IStickerState =>
    produce(state, draft => {
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

export default stickerReducer;