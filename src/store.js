import { createStore, applyMiddleware, compose  } from "redux";
import { RootReducer } from "./services/reducer/RootReducer";
import { thunk } from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(RootReducer, composeEnhancers(applyMiddleware(thunk)));