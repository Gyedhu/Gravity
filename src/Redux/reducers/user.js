import { SET_SIGNUP_DATA, SET_OTHER_INFO, CLEAR_USER_DATA, SET_USER_DATA } from "../contants";

const initialState = {
    uid: null,
    name: "Yedhumohanan.G",
    email: "gyedhumohanan@gmail.com",
    password: null,
    imageUrl: "https://firebasestorage.googleapis.com/v0/b/gravity-0202.appspot.com/o/Krx01cfOBjTLY1vX4Jgmc1eJ7593%2FprofilePicture.jpg?alt=media&token=7082277e-1601-48e0-a09f-9a66ec8615b7",
    gender: null,
    dob: null,
    profession: "Web developer",
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
