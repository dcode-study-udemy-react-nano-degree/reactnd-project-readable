import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
// ################################## end
// ################################## Redux
import {createStore} from "redux";
import {Provider} from "react-redux";
import rootReducer from "./reducers/index";
// ################################## end

// ################################## Bootstrap js
window.jQuery = window.$ = require('jquery/dist/jquery.min.js');
require('bootstrap/dist/js/bootstrap.min.js');
// ################################## end


const store = createStore(
    rootReducer,
    {
        categories: ['category_one'],
        posts: ['post_one']
    },
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));


registerServiceWorker();

