import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import PopupState, {bindTrigger, bindMenu} from 'material-ui-popup-state';
import {alpha, makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    filterBy: {
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
    }
}));

export default function MenuPopupState(props) {
    const classes = useStyles();
    return (
        <PopupState variant="popover" popupId="demo-popup-menu">
            {(popupState) => (
                <React.Fragment>
                    <Button className={classes.filterBy} variant="contained"
                            color="primary" {...bindTrigger(popupState)}>
                        Filter By {props.filterByValue}
                    </Button>
                    <Menu {...bindMenu(popupState)}>
                        <MenuItem onClick={() => {
                            props.handleFilterBy('name')
                        }} value="name">Name</MenuItem>
                        <MenuItem onClick={() => {
                            props.handleFilterBy('email')
                        }} value="email">Email</MenuItem>
                        <MenuItem onClick={() => {
                            props.handleFilterBy('body')
                        }} value="body">Body</MenuItem>
                    </Menu>
                </React.Fragment>
            )}
        </PopupState>
    );
}
