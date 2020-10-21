const initialState = {
    name: null,
    email: null,
    password: null,
    whatYouDoNow: null
};

const reducer = (state = initialState, action = {}) => {
    const { type } = action;

    switch (type) {
        default:
            return state;
    }
}

export default reducer;
