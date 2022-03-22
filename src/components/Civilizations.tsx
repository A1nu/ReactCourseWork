import React from 'react';
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../app/store";
import {selectCivilizations, selectError, selectStatus} from "../features/civilizations/civilizationsSlice";
import {fetchCivilizations} from "../features/civilizations/fetchCivilizations";
import {Civilization, Status} from "../features/civilizations/types";
import {CircularProgress, Grid} from "@mui/material";
import CivilizationCard from "./CivilizationCard";

const Civilizations = () => {
    const dispatch = useDispatch()
    const status = useTypedSelector(selectStatus)
    const error = useTypedSelector(selectError)
    const civilizations = useTypedSelector(selectCivilizations)
    if (civilizations.length === 0 && status === Status.IDLE && !error) {
        dispatch(fetchCivilizations())
    }

    return (
        <div>

            {status === Status.LOADING && <CircularProgress />}
            {status === Status.IDLE && error && <p>{error}</p>}
            {civilizations.length > 0 && status === Status.IDLE
                && <Grid container spacing={2}>
                    {
                        civilizations.map((civilization: Civilization) => (
                            <CivilizationCard {...civilization} key={civilization.id} />
                        ))
                    }
                </Grid>
            }
        </div>
    )
}
export default Civilizations
