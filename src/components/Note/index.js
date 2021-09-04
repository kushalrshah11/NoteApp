import React from "react";
import { connect } from "react-redux";
import {removeNote, editNote } from "../../store/actions";
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import * as PropTypes from "prop-types";


/**
 * Display Note - It displays the Note with Title and Text values along with EDIT &  DELETE button after user Add's a Note.
 */

export function Note(props) {
    return (
        <div>
            <Typography variant="h5" component="h2">Title: {props.title}</Typography>
            <Typography variant="h5" component="h2">Text: {props.text}</Typography>
            <div className="buttons-edit-delete">
            <Button variant="contained" color="primary" onClick={() => props.edit(props.id)}><EditIcon></EditIcon>Edit</Button>
            <Button variant="contained" color="secondary" onClick={() => props.remove(props.id)}><DeleteIcon></DeleteIcon>Delete</Button>
            </div>
        </div>
    );
}

function mapDispatchToProps(dispatch) {
    return {
        edit: id => {
            dispatch(editNote(id));
        },
        remove: id => {
            dispatch(removeNote(id));
        }
    };
}


Note.propTypes = {
    title: PropTypes.string,
    text: PropTypes.string,
    edit: PropTypes.func,
    remove : PropTypes.func
}

export default connect(
    null,
    mapDispatchToProps
)(Note);
