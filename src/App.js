import './App.scss';
import PrimarySearchAppBar from "./components/Header";
import store from "./store";
import React from "react";
import  { Provider } from "react-redux";
import AddNotes from "./components/AddNotes";
import NoteList from "./components/Notelist";

function App() {
    return (
        <Provider store={store}>
            <div className="app">
                <PrimarySearchAppBar/>
                <NoteList/>
                <AddNotes/>
            </div>
        </Provider>
    );
}

export default App;
