import {
    SET_LOADING,
    PUSH_NOTIFICATION,
    POP_NOTIFICATION
} from "../constants";

const initialState = {
    loading: "",
    notifications: null
};

const reducer = (state = initialState, action = {}) => {
    const { type, payload } = action;

    switch (type) {

        case SET_LOADING:
            return { ...state, loading: payload ? payload : "" };

        case PUSH_NOTIFICATION:
            return { ...state, notifications: payload };

        case POP_NOTIFICATION:
            return { ...state, notifications: null };

        default:
            return state;
    }
}

export default reducer;
