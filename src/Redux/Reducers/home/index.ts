import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { IHomePage } from "@Interfaces";

type IMapPayload = IHomePage.Actions.IMapPayload;

const INITIAL_STATE: IHomePage.IStateProps<{}> = {
    isFetching: false,
    data: {},
    errors: {},
};

const homeSlice = createSlice({
    name: "home",
    initialState: INITIAL_STATE,
    reducers: {
        fetchDataRequested: state => ({
            ...state,
            isFetching: true,
        }),
        fetchDataReceived: (state, action: PayloadAction<IMapPayload>) => ({
            ...state,
            isFetching: false,
            data: { ...action.payload },
        }),
        fetchDataFailure: (state, action: PayloadAction<IMapPayload>) => ({
            ...state,
            isFetching: false,
            errors: { ...action.payload },
        }),
        reset: state => ({
            ...state,
            ...INITIAL_STATE,
        }),
    },
});

export const {
    fetchDataRequested,
    fetchDataReceived,
    fetchDataFailure,
} = homeSlice.actions;

export default combineReducers({
    test: homeSlice.reducer,
});
