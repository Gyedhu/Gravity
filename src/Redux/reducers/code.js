import { } from "../constants";

const initialState = {
    files: [],
    codes: {},
    currentCode: {
        type: "",
        code: "",
        id: null
    }
};

const reducer = (state = initialState, action = {}) => {
    const { type, payload } = action;

    switch (type) {
        case "SET_CODE":
            const newCodes = { ...state.codes };
            newCodes[state.currentCode.id].code = payload;

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
                    name: newCurrentCode.name,
                    type: newCurrentCode.type,
                    code: newCurrentCode.code,
                    id: payload
                }
            };

        case "CREATE_NEW_FILE":
            let newFileName = prompt("What is the file name");
            let newFiles = state.files.slice();
            let newCode = { ...state.codes };
            let name, type;

            if (newFileName)
                if (state.codes[newFileName]) {
                    alert("This file name is already exist, try another one");
                } else {

                    let index = newFileName.lastIndexOf(".");
                    name = newFileName.slice(0, index);
                    type = newFileName.slice(index + 1, newFileName.length);
                    newFileName += (index === -1 ? ".txt" : "");
                    newFiles.push(newFileName);
                    newCode[newFileName] = {
                        name,
                        type,
                        code: ""
                    }
                }


            return {
                ...state,
                files: newFiles,
                codes: newCode,
                currentCode: {
                    code: "",
                    name,
                    type,
                    id: newFileName
                }
            };

        case "CLOSE_FILE":
            const closedFiles = state.files.filter((value) => value !== payload);

            return {
                ...state,
                files: closedFiles
            };

        default:
            return state;
    }
}

export default reducer;
