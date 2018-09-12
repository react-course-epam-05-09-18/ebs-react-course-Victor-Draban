import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


function playList(state = [
    {
        videocourses: [
        {
            title:"Видеокурс 1",
            createDate:"yes yes yes",
            duration:"76", 
            listOfAuthors:"author1 authorEast authorSouth"
        },
        {
            title:"Header from ...",
            createDate:"yes yes",
            duration:"77", 
            listOfAuthors:"author1 authorEast"
        },
        {
            title:"Header ...",
            createDate:"yes",
            duration:"78", 
            listOfAuthors:"author1"
        },
        {
            title:"...",
            createDate:"...",
            duration:"99", 
            listOfAuthors:"..."
        }
    ]}
]) {
    return state;
}

export const store = createStore(playList)

// console.log(store.getState());

ReactDOM.render(
    <Provider store={store}>
        <Router> 
            <App />
        </Router>
    </Provider>
    ,
    document.getElementById('root'));
registerServiceWorker();
