import { SET_LOADING, SET_NOTIFICATION } from "../contants";

const initialState = {
    loading: "",
    notification: ""
};

const reducer = (state = initialState, action = {}) => {
    const { type, payload } = action;

    switch (type) {

        case SET_LOADING:
            return { ...state, loading: payload ? payload : "" };

        case SET_NOTIFICATION:
            return { ...state, notification: payload ? payload : "" };

        default:
            return state;
    }
}

export default reducer;
