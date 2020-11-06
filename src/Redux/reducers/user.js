import {
    SET_SIGNUP_DATA,
    CLEAR_USER_DATA,
    SET_USER_DATA,
    SET_URL
} from "../constants";

import user_logo from "../../assets/hero-illustration.svg";

const initialState = {
    uid: null,
    name: "Yedhumohanan_G",
    email: "gyedhumohanan@gmail.com",
    password: null,
    imageUrl: user_logo,
    gender: null,
    dob: null,
    profession: "Developer",
    stars: 2
};

const reducer = (state = initialState, action = {}) => {
    const { type, payload } = action;

    switch (type) {

        case SET_SIGNUP_DATA:
            return {
                ...state,
                name: payload.name,
                email: payload.email,
                password: payload.password,
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
                imageUrl: payload.url,
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
