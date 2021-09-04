import React from 'react';
import { alpha, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import {filterNote} from "../../store/actions";
import {connect} from "react-redux";
import * as PropTypes from "prop-types";


const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));



/**
 * Navigation with Search Notes field 🐙
 */

export function PrimarySearchAppBar(props) {
    const classes = useStyles();


    /** This is a search input field function which takes the input from the search field and processes further */
    function filterByInput(event) {
        if(props.notes.notes.length === 0) {
            alert("Please add notes before you search");
            event.target.value = "";
            props.filter(event.target.value);
        }
        else {
            let input = event.target.value;
            props.filter(input);
        }

    }

    return (
        <div className={classes.grow}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="open drawer"
                    >
                    </IconButton>
                    <Typography className={classes.title} variant="h6" noWrap>
                        Notes App
                    </Typography>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                        id= "search-field"
                        placeholder="Search Notes..."
                        classes={{
                            root: classes.inputRoot,
                            input: classes.inputInput,
                        }}
                        inputProps={{ 'aria-label': 'search' }}
                        onChange={filterByInput}
                    />
                    </div>
                </Toolbar>
            </AppBar>
        </div>
        );
}

function mapStateToProps(state) {
    return {
        notes: state
    };
}

function mapDispatchToProps(dispatch) {
    return {
        filter: payload => {
            dispatch(filterNote(payload));
        }
    };
}

PrimarySearchAppBar.propTypes = {
    notes: PropTypes.object.isRequired,
    filter: PropTypes.func.isRequired
}



export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PrimarySearchAppBar);
