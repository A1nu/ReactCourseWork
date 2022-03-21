import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../../app/store";
import {Civilization, Status} from "./types";
import {fetchCivilizations} from "./fetchCivilizations";

type CivilizationsState = {
    list: Civilization[]
    status: Status
    error: string | null
}

const initialState = {
    list: [],
    error: null,
    status: Status.IDLE
} as CivilizationsState

export const civilizationsSlice = createSlice({
    name: 'civilizations',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchCivilizations.pending, (state) => {
            state.status = Status.LOADING
            state.error = null
        })
        builder.addCase(fetchCivilizations.fulfilled,
            (state, { payload }) => {
                state.list.push(...payload)
                state.status = Status.IDLE
            })
        builder.addCase(fetchCivilizations.rejected,
            (state, { payload }: any) => {
                if (payload) state.error = payload.message;
                state.status = Status.IDLE
            })
    }
})

export default civilizationsSlice.reducer

export const selectCivilizations = (state: RootState) => state.civilizations.list;

export const selectStatus = (state: RootState) => state.civilizations.status;

export const selectError = (state: RootState) => state.civilizations.error