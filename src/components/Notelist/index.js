import React from "react";
import Note from "./../Note";
import { connect } from "react-redux";
import EditNotes from "../EditNotes";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import * as PropTypes from "prop-types";




const useStyles = makeStyles({
    root: {
        minWidth: 275
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});



/**
 * Displays List of Notes
 */
export function NoteList(props) {
    const classes = useStyles();

    const searchString = props.notes.search.toString().toLowerCase();

    return (
        <div className="note-list">
                {props.notes.notes.filter((note) => note.title.toLowerCase().includes(searchString) || note.text.toLowerCase().includes(searchString) || props.notes.search == null).map(note => (
                    <div key={note.id} className="marginForCards">
                        {note.editing ?  <Card className={classes.root}><CardContent><EditNotes text={note.text} title={note.title} id={note.id} key={note.id}/></CardContent></Card> :
                            <Card className={classes.root}> <CardContent><Note key={note.id} text={note.text} title={note.title} id={note.id}/></CardContent></Card>}
                    </div>
                ))}
        </div>
    );
}

function mapStateToProps(state) {
    return {
        notes: state
    };
}

NoteList.propTypes = {
      notes: PropTypes.object
}

export default connect(mapStateToProps)(NoteList);


