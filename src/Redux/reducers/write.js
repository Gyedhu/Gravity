
import { CHANGE_WRITE_PAGE } from "../constants";

const initialState = {
    currentPage: "Question",
    data: null
};

const reducer = (state = initialState, action = {}) => {
    const { type, payload } = action;

    switch (type) {

        case CHANGE_WRITE_PAGE:
            return {
                ...state,
                currentPage: payload
            };

        case "set_data":
            return {
                ...state,
                data: payload
            }

        default:
            return state;
    }
}

export default reducer;
