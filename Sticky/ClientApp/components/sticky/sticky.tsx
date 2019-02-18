import * as React from 'react';
import AddButton from '../addButton/addButton';
import { connect } from 'react-redux';
import * as Actions from './stickyActions';
import * as _ from "lodash";
import { ISticker } from '../sticker/sticker';
import Sticker from '../sticker/sticker';
import { IPosition } from '../common';

export interface IStickyState {
    type: string;
    payload: ISticky;
}

export interface ISticky {
    stickers: ISticker[];
}

export interface IStickyProps {
    addSticker(index: number, top: number): void;
    setStickerPosition(index: number, pos: IPosition): void;
    changeStickerColor(index: number): void;
    deleteSticker(sticker: ISticker): void;
    changeStickerTitle(index: number, text: string): void;
    changeStickerNote(index: number, text: string): void;
    saveSticker(sticker: ISticker): void;
}

export class Sticky extends React.Component<ISticky & IStickyProps> {
    constructor(props: any) {
        super(props);
    }

    render(): JSX.Element {
        return <div>
            <AddButton clickHandler={this.addButtonClickHandler.bind(this)} />
            {
                this.props.stickers.map((sticker: ISticker) => {
                    return <Sticker
                        sticker={sticker}
                        key={sticker.index}
                        setPosition={this.props.setStickerPosition.bind(this)}
                        changeColor={this.props.changeStickerColor.bind(this)}
                        delete={this.props.deleteSticker.bind(this)}
                        changeTitle={this.props.changeStickerTitle.bind(this)}
                        changeNote={this.props.changeStickerNote.bind(this)}
                        save={this.props.saveSticker.bind(this)}
                    />;
                })
            }
        </div>
    }

    componentDidMount() {
        this.props.stickers.map((s: ISticker) => {
            console.log(s.date);
        });
    }

    addButtonClickHandler(): void {
        let max: ISticker | undefined = _.maxBy(this.props.stickers, 'index');
        this.props.addSticker(max ? max.index + 1 : 1, this.getMaxHeight());
    }

    getMaxHeight(): number {
        let max: ISticker | undefined = _.maxBy(this.props.stickers, 'y');
        return max ? max.y + 200 : 0;
    }
}

let mapDispatchToProps = (dispatch: any): IStickyProps => {
    return {
        addSticker: (index: number, top: number): void => dispatch(Actions.addSticker(index, top)),
        setStickerPosition: (index: number, pos: IPosition): void => dispatch(Actions.setStickerPosition(index, pos)),
        changeStickerColor: (index: number): void => dispatch(Actions.changeStickerColor(index)),
        deleteSticker: async (sticker: ISticker): Promise<void> => dispatch(Actions.deleteSticker(sticker)),
        changeStickerTitle: (index: number, text: string): void => dispatch(Actions.changeStickerTitle(index, text)),
        changeStickerNote: (index: number, text: string): void => dispatch(Actions.changeStickerNote(index, text)),
        saveSticker: async (sticker: ISticker): Promise<void> => dispatch(Actions.saveSticker(sticker))
    }
}

let mapStateToProps = (state: any): ISticky => {
    return {
        stickers: state.stickyReducer.payload.stickers
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sticky);