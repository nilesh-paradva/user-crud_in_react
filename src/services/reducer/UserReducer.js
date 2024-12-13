const initialState = {
    users: [],
    user: null,
    isLoading: false,
    isError: null,
    isSuceess: false,
    addUserModal: false,
}

export const UserReducer = (state = initialState, action) => {
    switch (action.type) {

        case "TOGGLE_USER_MODAL":
            return { ...state, addUserModal: !state.addUserModal };

        case "USER_POST":
            return { ...state, isSuceess: true };

        case "USER_GET":
            return { ...state, users: action.payload, isSuceess: false };

        case "USER_SINGLE":
            return { ...state, user: action.payload, isSuceess: false };

        case "USER_UPDATE":
            return { ...state, user: action.payload, isSuceess: true };

        case "USER_ERR":
            return { ...state, isError: action.payload };

        default:
            return state;
            
    }
}