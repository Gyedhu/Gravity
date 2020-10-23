import { SET_SIGNUP_DATA, SET_OTHER_INFO } from "../contants";

const initialState = {
    name: null,
    email: null,
    password: null,
    imageUrl: null,
    gender: null,
    dob: null,
    profession: null,
    whatYouDoing: null
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

        default:
            return state;
    }
}

export default reducer;
