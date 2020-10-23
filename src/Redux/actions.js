import { SET_LOADING, SET_NOTIFICATION, SET_SIGNUP_DATA, SET_OTHER_INFO } from "./contants"

// user actions  

export const setSignupData = payload => ({
    type: SET_SIGNUP_DATA,
    payload
});

export const setOtherInfo = payload => ({
    type: SET_OTHER_INFO,
    payload
});


// process actions

export const setLoading = payload => ({
    type: SET_LOADING,
    payload
});

export const setNotification = payload => ({
    type: SET_NOTIFICATION,
    payload
});

