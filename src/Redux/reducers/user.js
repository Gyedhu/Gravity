import {
    SET_SIGNUP_DATA,
    CLEAR_USER_DATA,
    SET_USER_DATA,
    SET_URL
} from "../constants";

import user_logo from "../../assets/hero-illustration.svg";

const initialState = {
    uid: null,
    name: " ",
    email: " ",
    password: null,
    imageUrl: user_logo,
    gender: null,
    dob: null,
    profession: " ",
    stars: 0
};

const reducer = (state = initialState, action = {}) => {
    const { type, payload } = action;

    switch (type) {

        case SET_SIGNUP_DATA:
            return {
                ...state,
                name: payload.name,
                email: payload.email,
                profession: payload.profession,
            };

        case SET_URL:
            return {
                ...state,
                imageUrl: payload
            };

        case SET_USER_DATA:
            return {
                uid: payload.uid,
                name: payload.name,
                email: payload.email,
                imageUrl: payload.imageUrl,
                profession: payload.profession,
                stars: payload.stars
            };

        case CLEAR_USER_DATA:
            return {
                ...initialState
            };

        default:
            return state;
    }
}

export default reducer;
