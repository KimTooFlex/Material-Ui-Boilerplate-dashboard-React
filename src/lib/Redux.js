import {createStore} from "redux";


const reducer = (state, action) => {
    return action;
};


let stores = {};

export function subscribe(name, _object) {

    let state = _object.state;
    if (stores[name]) {
        state= stores[name]["state"];
        _object.setState(state)
     }

        stores[name] = createStore(reducer, {});
        stores[name]["state"] = state;
        stores[name].subscribe(() => {
            _object.setState(stores[name].getState());
        });






};


export function setState(name, newState) {
  if (typeof(newState.type) === 'undefined') {
        newState.type = name;
    }

    stores[name]["state"] = newState;
    stores[name].dispatch(newState);
};

export function updateState(name, newState) {
    newState.type = name;
    stores[name]["state"] = newState;
};

export function getState(name) {
    return stores[name]["state"];
};


export default function init() {
};

