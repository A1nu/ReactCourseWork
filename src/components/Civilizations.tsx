import React from 'react';
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../app/store";
import {selectCivilizations, selectError, selectStatus} from "../features/civilizations/civilizationsSlice";
import {fetchCivilizations} from "../features/civilizations/fetchCivilizations";
import {Status} from "../features/civilizations/types";

const Civilizations = () => {
    const dispatch = useDispatch()
    const status = useTypedSelector(selectStatus)
    const error = useTypedSelector(selectError)
    if (useTypedSelector(selectCivilizations).length === 0 && status === Status.IDLE && !error) {
        dispatch(fetchCivilizations())
    }

    return <p>Civilizations</p>
}
export default Civilizations
