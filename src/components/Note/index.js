import React from "react";
import { connect } from "react-redux";
import {removeNote, editNote } from "../../store/actions";
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


export function Note(props) {
    return (
        <div>
            <Typography variant="h5" component="h2">Title: {props.title}</Typography>
            <Typography variant="h5" component="h2">Text: {props.text}</Typography>

            <Button variant="contained" color="primary" onClick={() => props.edit(props.id)}>Edit</Button>
            <Button variant="contained" color="secondary" onClick={() => props.remove(props.id)}>Delete</Button>
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

export default connect(
    null,
    mapDispatchToProps
)(Note);
