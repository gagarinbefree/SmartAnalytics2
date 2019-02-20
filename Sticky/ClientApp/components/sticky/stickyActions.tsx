import { Dispatch, Action } from 'redux';
import {
    STICKY_ADD_STICKER,
    STICKY_SET_STICKER_POSITION,
    STICKY_CHANGE_STICKER_COLOR,
    STICKY_DELETE_STICKER,
    STICKY_TITLE_CHANGE,
    STICKY_NOTE_CHANGE,
    STICKY_SAVE_STICKER,
    STICKY_UPDATE_STICKER,
    STICKY_LOAD_STICKERS
} from './stickyConstants';
import { IStickyState, ISticky } from './sticky';
import { IPosition } from '../common';
import { func } from 'prop-types';
import sticker, { ISticker } from '../sticker/sticker';

export interface IStickerAction {
    type: string,
    index: number
}

export interface IAddStickerAction extends IStickerAction {
    top: number
}

export interface ISetStickerPositionAction extends IStickerAction {
    pos: IPosition
}

export interface ITextChangeStickerAction extends IStickerAction  {
    text: string,
}

export interface IDbStickerAction {
    type: string,
    sticker: ISticker
}

export interface IDbStickersAction {
    type: string,
    stickers: ISticker[]
}

export function addSticker(index: number, top: number): IAddStickerAction {
    return { type: STICKY_ADD_STICKER, index: index, top: top }
}

export function setStickerPosition(index: number, pos: IPosition): any {
    return { type: STICKY_SET_STICKER_POSITION, index: index, pos: pos }
}

export function changeStickerColor(index: number): IStickerAction {
    return { type: STICKY_CHANGE_STICKER_COLOR, index: index }
}

export function changeStickerTitle(index: number, text: string): ITextChangeStickerAction {
    return { type: STICKY_TITLE_CHANGE, index: index, text: text }
}

export function changeStickerNote(index: number, text: string): ITextChangeStickerAction {
    return { type: STICKY_NOTE_CHANGE, index: index, text: text }
}

export function deleteSticker(sticker: ISticker): Function {
    return async (dispatch: Dispatch<IDbStickerAction>): Promise<void> => {
        try {
            if (sticker.id == 0) {
                dispatch({ type: STICKY_DELETE_STICKER, sticker });
            }
            else {
                let request: any = await fetch('/api/stickers/' + sticker.id, { method: 'DELETE' });
                await request;

                dispatch({ type: STICKY_DELETE_STICKER, sticker: sticker });
            }
        }
        catch (e) {
            console.error(e);
        }
    }
}

export function saveSticker(sticker: ISticker): Function {
    return async (dispatch: Dispatch<IDbStickerAction>): Promise<void> => {
        try {
            if (sticker.id == 0) {
                let request: any = await fetch('/api/stickers/', {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json;charset=utf-8'
                    },
                    body: JSON.stringify(sticker)
                });
                let res: ISticker = await request.json();

                dispatch({ type: STICKY_SAVE_STICKER, sticker: res });
            }
            else {
                let request: any = await fetch('/api/stickers/' + sticker.id, {
                    method: 'PUT',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json;charset=utf-8'
                    },
                    body: JSON.stringify(sticker)
                });
                await request;

                dispatch({ type: STICKY_UPDATE_STICKER, sticker: sticker });
            }
        }
        catch (e) {
            console.error(e);    
        }
    }
}

export function loadStickers(): Function {
    return async (dispatch: Dispatch<IDbStickersAction>): Promise<void> => {
        try {
            let request: any = await fetch('/api/stickers/', { method: 'GET' });
            let res: ISticker[] = await request.json();

            dispatch({ type: STICKY_LOAD_STICKERS, stickers: res });
        }
        catch (e) {
            console.error(e);
        }
    }
}