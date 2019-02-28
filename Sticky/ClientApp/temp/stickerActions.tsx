/*import { ISticker } from "./sticker";
import { IPosition } from "../common";
import { STICKER_SET_POSITION, STICKER_CHANGE_COLOR, STICKER_INIT } from "./stickerConstants";
import { Dispatch } from 'redux';

export interface IStickerAction {
    type: string;
}

export interface IStickerSetPositionAction extends IStickerAction {
    sticker: ISticker;
    pos: IPosition;
}

export interface IStickerInitAction extends IStickerAction {
    sticker: ISticker;
}

export function setPosition(sticker: ISticker, pos: IPosition): IStickerSetPositionAction  {
    return {
        type: STICKER_SET_POSITION,
        sticker: sticker,
        pos: pos
    }
}

export function changeColor(): IStickerAction {
    return {
        type: STICKER_CHANGE_COLOR
    }   
}

export function init(sticker: ISticker): IStickerInitAction {
    return {
        type: STICKER_INIT,
        sticker: sticker
    }
}*/