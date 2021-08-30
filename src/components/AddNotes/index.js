import React, {useState} from "react";
import {connect} from "react-redux";
import {addNote} from "./../../store/actions";





export function AddNotes(props) {
    const [form, setForm] = useState({
        title: "",
        text: ""
    });


    /**
     * Insert text at cursor position.
     *
     * @param {string} text
     * @public
     */

    function handleChange(e) {
        const {name, value} = e.target;

        let newForm = {...form};
        newForm[name] = value;

        setForm(newForm);
    }

    function handleSubmit(e) {
        e.preventDefault();
        props.addNote(form);
        setForm({title: "", text: ""});
    }

    return (
                <form onSubmit={handleSubmit}>
                    <h4>Add a Note</h4>
                    <div>
                        <label>Title
                            <input
                            name="title"
                            value={form.title}
                            onChange={handleChange}
                            required/></label>
                    </div>
                    <div>
                        <label>Text
                            <textarea
                                name="text"
                                value={form.text}
                                onChange={handleChange}
                                required
                            />
                        </label>
                    </div>
                    <div>
                        <button className="btn btn-blue">Add Note</button>
                    </div>
                </form>

    );
}

function mapDispatchToProps(dispatch) {
    return {
        addNote: payload => {
            dispatch(addNote(payload));
        }
    };
}

export default connect(
    null,
    mapDispatchToProps
)(AddNotes);
