import { ILoginUser } from 'models/User';
import type { AppDispatch } from 'redux/store';
import { loginStart, loginSuccess, loginFailure } from "redux/userRedux";
import { publicRequest } from "./baseService";

export const loginUser = async (dispatch: AppDispatch, user: ILoginUser) => {
    dispatch(loginStart());
    try
    {
        const res = await publicRequest.post("/auth/login", user);
        dispatch(loginSuccess(res.data));
    }
    catch (e){
        dispatch(loginFailure());
    }
}