import * as React from 'react';
import { IMuiStyles, IPosition } from '../common';
import classNames from 'classnames';
import { withStyles, Theme, createStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Draggable, { DraggableEventHandler, ControlPosition, DraggableData } from 'react-draggable';
import TextField from '@material-ui/core/TextField';
import { InputAdornment, CardHeader, Avatar, IconButton } from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import Delete from '@material-ui/icons/Delete';
import CloudDone from '@material-ui/icons/CloudDone';
import TextareaAutosize from 'react-textarea-autosize';
import SaveIcon from '@material-ui/icons/Save';

export interface ISticker {
    index: number,
    id: number;
    date: Date;
    x: number,
    y: number,
    title: string;
    note: string;
    color: string;
    issaved: boolean;
}

const styles = (theme: Theme) => createStyles({
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
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 230,
    },
    avatar: {
        backgroundColor: '#000000',
        cursor: 'pointer'
    },
    actions: {
        display: 'flex',
    },
    expand: {
        marginLeft: 'auto'
    },
    area: {
        marginLeft: 8,
        marginTop: 30,
        width: 224,
        resize: 'vertical',
        border: '1px solid #b3adad',
        borderRadius: 3
    },
    button: {
        margin: theme.spacing.unit,
    },
    leftIcon: {
        marginRight: theme.spacing.unit,
    },
    rightIcon: {
        marginLeft: theme.spacing.unit,
    },
    iconSmall: {
        fontSize: 20,
    }
});

export interface IStickerProps {
    classes: any,
    sticker: ISticker,
    setPosition(index: number, pos: IPosition): void;      
    changeColor(index: number): void;
    delete(sticker: ISticker): void;
    changeTitle(index: number, text: string): void;
    changeNote(index: number, text: string): void;
    save(sticker: ISticker): void;
}

export class Sticker extends React.Component<IStickerProps> {
    constructor(props: IStickerProps) {
        super(props);
    }

    render(): JSX.Element {
        const { classes } = this.props;
        const sticker: ISticker = this.props.sticker;

        return <Draggable defaultClassName={classes.draggable}
            defaultPosition={{ x: sticker.x, y: sticker.y }}
            onStop={this.draggableOnStopEventHandler.bind(this)}
            handle=".card-handle"
        >
            <Card id={sticker.id.toString()} className={classes.card}>
                <CardHeader className="card-handle" style={{ backgroundColor: this.props.sticker.color, cursor: 'move' }}
                    avatar={
                        <Avatar aria-label="Recipe" className={classes.avatar}
                            onClick={this.cardHeaderOnClickEventHandler.bind(this)}
                        >
                            {this.props.sticker.index}
                        </Avatar>
                    }
                    title={this.props.sticker.date.toLocaleString()}
                />
                <CardContent>
                    <Typography component="p">
                        <TextField
                            id="outlined-static"
                            label="title"
                            className={classes.textField}
                            margin="normal"
                            InputProps={{
                                startAdornment: <InputAdornment position="start"></InputAdornment>,
                            }}
                            autoFocus={true}
                            onChange={this.textFieldOnChangeHandler.bind(this)}
                        />
                    </Typography>
                    <Typography component="p">
                        <TextareaAutosize minRows={5}
                            className={classes.area}
                            onChange={this.textareaOnChangeHandler.bind(this)}
                        />
                    </Typography>
                </CardContent>
                <CardActions className={classes.actions} disableActionSpacing>
                    <Button variant="contained" size="small" className={classes.button}
                        onClick={this.saveButtonOnClickHandler.bind(this)}
                        disabled={sticker.issaved}
                    >
                        <SaveIcon className={classNames(classes.leftIcon, classes.iconSmall)}/>
                            Save
                        </Button>
                    <IconButton aria-label="Delete" className={classes.expand}
                        onClick={this.deleteButtonOnClickHandler.bind(this)}
                    >
                        <Delete />
                    </IconButton>

                </CardActions>
            </Card>
        </Draggable>
    }

    draggableOnStopEventHandler(e: any, pos: DraggableData): void {
        if (this.props.sticker.x != pos.x || this.props.sticker.y != pos.y)
            this.props.setPosition(this.props.sticker.index, { x: pos.x, y: pos.y });
    }

    cardHeaderOnClickEventHandler(): void {
        this.props.changeColor(this.props.sticker.index);
    }

    deleteButtonOnClickHandler(): void {
        this.props.delete(this.props.sticker);
    }

    textFieldOnChangeHandler(e: React.ChangeEvent<HTMLInputElement>): void {
        this.props.changeTitle(this.props.sticker.index, e.target.value);
    }

    textareaOnChangeHandler(e: React.ChangeEvent<HTMLTextAreaElement>): void {
        this.props.changeNote(this.props.sticker.index, e.target.value);
    }

    saveButtonOnClickHandler(): void {
        this.props.save(this.props.sticker);
    }
}
        
export default withStyles(styles)(Sticker);