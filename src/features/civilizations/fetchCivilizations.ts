import { createAsyncThunk } from "@reduxjs/toolkit";
import { Civilization } from "./types";

type FetchCivilizationsError = {
    message: string;
}

export const fetchCivilizations = createAsyncThunk<Civilization[]>(
    'civilizations/fetch',
    async (thunkApi: any) => {
        const response = await fetch(
            `./civilizations.json`, { mode: 'no-cors'}
        )

        if (response.status !== 200) {
            return thunkApi.rejectWithValue({
                message: "Failed to fetch civilizations."
            })
        }

        const data: { civilizations: Civilization[] } = await response.json();
        return data.civilizations
    }
)

export const fetchSingleCivilization = createAsyncThunk<Civilization, number>(
    'civilization/fetch',
    async (id: number, thunkApi:any) => {
        const response = await fetch(
            `./civilizations.json`, { mode: 'no-cors'}
        )

        if (response.status !== 200) {
            return thunkApi.rejectWithValue({
                message: "Failed to fetch civilization."
            })
        }
        const data: { civilizations: Civilization[] } = await response.json();
        console.log(data.civilizations.find((civilization) => civilization.id === id));
        return data.civilizations.find((civilization) => civilization.id === id)
        }
)
