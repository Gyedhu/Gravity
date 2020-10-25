import {
    SET_LOADING,
    SET_NOTIFICATION,
    SET_SIGNUP_DATA,
    SET_OTHER_INFO,
    SET_UID,
    SET_NAME,
    SET_EMAIL,
    SET_PROFESSION,
    CLEAR_USER_DATA,
    SET_USER_DATA
} from "./contants"

// user actions   
export const setUID = payload => ({
    type: SET_UID,
    payload
});

export const setName = payload => ({
    type: SET_NAME,
    payload
});

export const setEmail = payload => ({
    type: SET_EMAIL,
    payload
});

export const setProfession = payload => ({
    type: SET_PROFESSION,
    payload
});

export const setSignupData = payload => ({
    type: SET_SIGNUP_DATA,
    payload
});

export const setOtherInfo = payload => ({
    type: SET_OTHER_INFO,
    payload
});

export const setUserData = payload => ({
    type: SET_USER_DATA,
    payload
});

export const clearUserData = payload => ({
    type: CLEAR_USER_DATA,
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

