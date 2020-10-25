import { SET_SIGNUP_DATA, SET_OTHER_INFO, CLEAR_USER_DATA, SET_USER_DATA } from "../contants";

const initialState = {
    uid: null,
    name: null,
    email: null,
    password: null,
    imageUrl: null,
    gender: null,
    dob: null,
    profession: null,
    stars: null
};

const reducer = (state = initialState, action = {}) => {
    const { type, payload } = action;

    switch (type) {
        case SET_SIGNUP_DATA:
            return {
                ...state,
                name: payload.name,
                email: payload.email,
                password: payload.password
            };

        case SET_OTHER_INFO:
            return {
                ...state,
                dob: payload.dob,
                gender: payload.gender,
                imageUrl: payload.url,
                profession: payload.profession,
                whatYouDoing: payload.wdn
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
