import React from "react";
import {useParams} from "react-router-dom";
import {useTypedSelector} from "../app/store";
import {selectCivilizationById} from "../features/civilizations/civilizationsSlice";

const CivilizationDetails = () => {
    const params = useParams();
    const civilization = useTypedSelector(selectCivilizationById(parseInt(params.id as string)))

    return <p>Civilization: {civilization?.name}</p>
}
export default CivilizationDetails