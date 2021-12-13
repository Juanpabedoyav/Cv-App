import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { guardarDatos, obtenerDatos } from "../../helpers/localStorage";
import { loginReducer } from "../reducers/loginReducer";
import { registerReducer } from "../reducers/registerReducer";
import {pdfReducer} from "../reducers/pdfReducer"

const storageState = obtenerDatos();
//console.log(storageState);

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const reducers = combineReducers({
  login: loginReducer,
  registro: registerReducer,
  pdfData : pdfReducer
});

export const store = createStore(
  reducers,
  storageState,
  composeEnhancers(applyMiddleware(thunk))
);

store.subscribe(() => guardarDatos({ user: store.getState().login }));
