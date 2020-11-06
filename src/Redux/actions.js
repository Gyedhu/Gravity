import {
    SET_LOADING,
    SET_SIGNUP_DATA, 
    CLEAR_USER_DATA,
    SET_USER_DATA,
    PUSH_NOTIFICATION,
    POP_NOTIFICATION,
    CHANGE_PAGE,
    SET_URL
} from "./constants";

// user actions   

export const setSignupData = payload => ({
    type: SET_SIGNUP_DATA,
    payload
});

export const setUrl = payload => ({
    type: SET_URL,
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

export const pushNotification = payload => ({
    type: PUSH_NOTIFICATION,
    payload
});

export const popNotification = () => ({
    type: POP_NOTIFICATION
});


// Router actions

export const changePage = payload => ({
    type: CHANGE_PAGE,
    payload
});
