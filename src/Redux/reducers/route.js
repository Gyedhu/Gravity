import { CHANGE_PAGE } from "../constants";

const initialState = {
    currentPage: "/",
};

const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case CHANGE_PAGE:
            return {
                ...state,
                currentPage: action.payload
            }
        default:
            return state;
    }
}

export default reducer;
