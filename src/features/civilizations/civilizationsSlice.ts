import {createSelector, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../../app/store";
import {Civilization, Status} from "./types";
import {fetchCivilizations, fetchSingleCivilization} from "./fetchCivilizations";

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
                state.status = Status.ERROR
            })
        builder.addCase(fetchSingleCivilization.pending, (state) => {
            state.status = Status.LOADING
            state.error = null
        })
        builder.addCase(fetchSingleCivilization.fulfilled,
            (state, { payload }) => {
                console.log(payload)
                state.status = Status.IDLE
            })
        builder.addCase(fetchSingleCivilization.rejected,
            (state, { payload }: any) => {
                if (payload) state.error = payload.message;
                state.status = Status.ERROR
            })
    }
})

export default civilizationsSlice.reducer

export const selectCivilizations = (state: RootState) => state.civilizations.list;

export const selectStatus = (state: RootState) => state.civilizations.status;

export const selectError = (state: RootState) => state.civilizations.error

export const selectCivilizationById = (id: number) =>
    createSelector(selectCivilizations,
        (civilizations) => civilizations.find((civilization) => civilization.id === id)
    )

export const isCivilizationExists = (civilization: Civilization) =>
    createSelector(selectCivilizations,
        (civilizations) => civilizations.includes(civilization)
    )