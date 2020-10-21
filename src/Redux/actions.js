import { SET_NAME, SET_EMAIL, SET_PASSWORD } from "./contants"

// user actions
export const setName = payload => ({
    type: SET_NAME,
    payload
});

export const setEmail = payload => ({
    type: SET_EMAIL,
    payload
});

export const setPassword = payload => ({
    type: SET_PASSWORD,
    payload
});
