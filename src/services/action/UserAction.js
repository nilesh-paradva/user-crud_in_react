import Api from "../../api"

export const AddUserModalAct = () => {
    return {
        type: "TOGGLE_USER_MODAL",
    }
}

export const UserGetAct = (data) => {
    return {
        type: "USER_GET",
        payload: data,
    }
}

export const UserPostAct = (data) => {
    return {
        type: "USER_POST",
        payload: data,
    }
}

export const SingleUser = (id) => {
    return {
        type: "USER_SINGLE",
        payload: id
    }
}

export const UserUpdateAct = (data) => {
    return {
        type: "USER_UPDATE",
        payload: data,
    };
};

export const userErr = (err) => {
    return {
        type: "USER_ERR",
        payload: err
    }
}

export const GetUsersAsy = () => {
    return (dispatch) => {
        Api.get("/users").then((res) =>
            dispatch(UserGetAct(res.data)),
        ).catch((err) => {
            dispatch(userErr(err.message))
        })
    }
}


export const PostUserAsy = (data) => {
    return (dispatch) => {
        Api.post("/users", data).then((res) =>
            dispatch(UserPostAct(res.data)),
        ).catch((err) => {
            dispatch(userErr(err.message))
        })
    }
}

export const DeleteUserAsy = (id) => {
    return (dispatch) => {
        Api.delete(`/users/${id}`).then((res) =>
            dispatch(GetUsersAsy()),
        ).catch((err) => {
            dispatch(userErr(err.message))
        })
    }
}

export const SingleUserAsy = (id) => {
    return (dispatch) => {
        Api.get(`/users/${id}`).then((res) =>
            dispatch(SingleUser(res.data)),
        ).catch((err) => {
            dispatch(userErr(err.message))
        })
    }
}

export const UserUpdateAcy = (id, data) => {
    return (dispatch) => {
        Api.put(`/users/${id}`, data).then((res) => {
            dispatch(UserUpdateAct(res.data));
        }).catch((err) => {
            dispatch(userErr(err.message));
        });
    };
};