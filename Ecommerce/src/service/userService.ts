import { ILoginUser } from 'model/User/User';
import type { AppDispatch } from 'redux/store';
import { loginStart, loginSuccess, loginFailure } from "redux/userRedux";
import { userRequest } from "./productService";

export const loginUser = async (dispatch: AppDispatch, user: ILoginUser) => {
    dispatch(loginStart());
    try
    {
        const res = await userRequest.post("/auth/login", user);
        dispatch(loginSuccess(res.data));
    }
    catch (e){
        dispatch(loginFailure());
    }
}