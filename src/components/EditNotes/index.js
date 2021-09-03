import React, {useState} from "react";
import {updateNote} from "../../store/actions";
import {connect} from "react-redux";
import * as PropTypes from "prop-types";


/**
 * Edit a Note Form
 */
export function EditNotes(props) {

    /** Setting the state of the form fields from the store values */
    const [form, setForm] = useState({
        title: props.title,
        text: props.text,
        id: props.id
    });


    /** This function takes input from input and textarea fields of Title & Text and sets it in the form field */
    function handleChange(e) {
        const {name, value} = e.target;

        let newForm = {...form};
        newForm[name] = value;
        setForm(newForm);
    }

    /** This function submits the form and calls dispatcher method update to store the fields of the form in the store updated  by the user*/
    function handleUpdate(e) {
        e.preventDefault();
        props.update(form);

    }

    return (
        <div key={props.id}>
            <form  onSubmit={handleUpdate}>
                <label>Title
                    <div>
                    <input
                        name="title"
                        value={form.title}
                        onChange={handleChange}
                        required
                    />
                    </div>
                </label>
                <br/>
                <br/>
                <label>Text
                    <div>
                    <textarea
                        name="text"
                        value={form.text}
                        onChange={handleChange}
                        required
                    />
                    </div>
                </label>
                <br/>
                <br/>

                <button>Update</button>

            </form>
        </div>
    );
}

function mapDispatchToProps(dispatch) {
    return {
        update: payload => {
            dispatch(updateNote(payload));
        }
    };
}

EditNotes.propTypes = {
    title: PropTypes.string,
    text: PropTypes.string,
    id: PropTypes.number,
    update: PropTypes.func.isRequired
}


export default connect(null, mapDispatchToProps)(EditNotes);




