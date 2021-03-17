import React from "react";
import ReactDOM from "react-dom";
import Root from "./components/root";
import configureStore from "./store/store";
import * as SessionAPIUtil from "./util/session_api_util";

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    let preLoadedState = undefined;
    let store;
    if (window.currentUser) {
        preLoadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: {
                id: window.currentUser.id
            }
        };
        store = configureStore(preLoadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }
    store = configureStore();
    ReactDOM.render(<Root store={store} />, root);

    window.signup = SessionAPIUtil.signUp;
    window.login = SessionAPIUtil.login;
    window.logout = SessionAPIUtil.logout;
    window.getState = store.getState;
});