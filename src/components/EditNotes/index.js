import React, {useState} from "react";
import {updateNote} from "../../store/actions";
import {connect} from "react-redux";


export function EditNotes(props) {

    const [form, setForm] = useState({
        title: props.title,
        text: props.text,
        id: props.id
    });


    function handleChange(e) {
        const {name, value} = e.target;

        let newForm = {...form};
        newForm[name] = value;
        setForm(newForm);
    }

    function handleUpdate(e) {
        e.preventDefault();
        props.update(form);

    }

    return (
        <div key={props.id}>
            <form  onSubmit={handleUpdate}>
                <label>Title
                    <input
                        name="title"
                        value={form.title}
                        onChange={handleChange}
                        required
                    />
                </label>
                <br/>
                <br/>
                <label>Text
                    <textarea
                        name="text"
                        value={form.text}
                        onChange={handleChange}
                        required
                    />
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


export default connect(null, mapDispatchToProps)(EditNotes);




