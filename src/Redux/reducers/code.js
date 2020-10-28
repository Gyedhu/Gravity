import { } from "../contants";

const initialState = {
    files: [],
    codes: {},
    currentCode: {
        code: "",
        id: null
    }
};

const reducer = (state = initialState, action = {}) => {
    const { type, payload } = action;

    switch (type) {
        case "SET_CODE":
            const newCodes = { ...state.codes };
            newCodes[state.currentCode.id] = payload;

            return {
                ...state,
                codes: newCodes,
                currentCode: {
                    ...state.currentCode,
                    code: payload
                }
            };

        case "SET_CURRENT_CODE":
            const newCurrentCode = state.codes[payload];

            return {
                ...state,
                currentCode: {
                    code: newCurrentCode,
                    id: payload
                }
            };

        case "CREATE_NEW_FILE":
            const newFileName = prompt("What is the file name");
            let newFiles = state.files.slice();
            let newCode = { ...state.codes };

            if (state.codes[newFileName]) {
                alert("This file name is already exist, try another one");
            } else {
                newFiles.push(newFileName);
                newCode[newFileName] = "";
            }

            return {
                ...state,
                files: newFiles,
                codes: newCode,
                currentCode: {
                    code: "",
                    id: newFileName
                }
            };

        default:
            return state;
    }
}

export default reducer;
