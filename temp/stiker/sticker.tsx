import * as React from 'react';
import { connect } from 'react-redux';
import { initalSticky } from '../sticky/stickyReducer';
import { initalSticker } from './stickerReducer';
import * as Actions from './stickerActions';
import { IMuiStyles } from '../common';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Draggable, { DraggableEventHandler, ControlPosition } from 'react-draggable';

export interface IStickerState {
    type: string;
    payload: IStickerPayload
}

export interface IStickerPayload {
    sticker: ISticker;
    error: '';
}

export interface ISticker {
    id: number;
    date: Date;
    left: number;
    top: number;
    title: string;
    text: string;
    color: string;
}

export interface IStickerProps {    
    setPosition(left: number, top: number): void;    
}

const styles = {
    card: {
        width: 275,
        margin: 10
    },    
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    draggable: {
        position: 'absolute' as 'absolute'
    }
};

class Sticker extends React.Component<IStickerPayload & IStickerProps & IMuiStyles> {
    constructor(props: any) {
        super(props);
    }

    render(): JSX.Element {
        const classes = this.props.classes;        
        return (
            <Draggable defaultClassName={classes.draggable}
                defaultPosition={{ x: this.props.sticker.left, y: this.props.sticker.top }}
                onStop={this.handleStop.bind(this)}
            >
                <Card className={classes.card}>
                    <CardContent>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                            Word of the Day
                        </Typography>
                        <Typography variant="h5" component="h2">
                            XXX    
                        </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                            YYY    
                        </Typography>
                        <Typography component="p">
                            ZZZ                
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>
            </Draggable>
        );
    }

    handleStop(e: any, position: ControlPosition) {
        this.props.setPosition(position.x, position.y);
    }
}

let mapDispatchToProps = (dispatch: any): IStickerProps => {
    return {
        setPosition: (left: number, top: number): void => dispatch(Actions.setStickerPosition(left, top))
    }
}

let mapStateToProps = (state: any): IStickerPayload => {

    debugger;

    return {
        sticker: state.stickerReducer.payload.sticker,
        error: state.stickerReducer.payload.error
    }
}

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(Sticker));