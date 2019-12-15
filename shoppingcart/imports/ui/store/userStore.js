import {Meteor} from "meteor/meteor";
import React, {createContext, useReducer} from "react";
import {USER} from "./enums";

//1. createContext({})
//2. define initialState
//3. function reducer
//4. define Store ---> inside Store provide values[state, dispatch] to context

export const UserContext = createContext({});
export const UserDispatch = createContext({});

const initialState = {user: false};

//const routing = useHistory();
function reducer(state, action) {
    switch (action.type) {
        case USER.USER_LOGIN: {
            return {user: Meteor.userId()}
        }
        case USER.USER_LOGOUT: {
            return {user: false}
        }
        case USER.USER_REGISTER: {
            return {user: Meteor.userId()}
        }
        default: {
            throw new Error("Action type must be defined");
        }
    }
}

const UserStore = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    //debugger;
    return (
        <UserContext.Provider value={state}>
            <UserDispatch.Provider value={dispatch}>
                {children}
            </UserDispatch.Provider>
        </UserContext.Provider>
    )
};
export default UserStore;

