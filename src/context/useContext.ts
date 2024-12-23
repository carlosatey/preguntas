import React, { Dispatch, SetStateAction, useContext } from "react";
import { Assessment } from "../types/Assessment";


interface DataContext {
    evaluacion: Assessment;
    setEvaluacion: Dispatch<SetStateAction<Assessment>>;
    numberQuestion: number;
    setNumberQuestion: Dispatch<SetStateAction<number>>;
}

export const DataContext = React.createContext<DataContext>({
    evaluacion: {
        puntuacion: 0,
        evaluacion: []
    },
    numberQuestion: 0,
    setEvaluacion: () => { },
    setNumberQuestion: () => { }
})

export const useDataContext = () => {
    return useContext(DataContext);
}