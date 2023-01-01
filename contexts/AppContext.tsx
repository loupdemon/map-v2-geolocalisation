import React, { useContext, useState } from "react";
import { Train } from "../types/Train";

export const SelectedTrainContext = React.createContext({
    selectedTrain: null,
    setSelectedTrain: async (train: Train | null) => null
});

export const useSelectedTrain = () => useContext(SelectedTrainContext)

// @ts-ignore
export const SelectedTrainProvider = ({ children }) => {
    const [selectedTrain, setSelectedTrain] = useState(null)
    // @ts-ignore
    return <SelectedTrainContext.Provider value={{ selectedTrain, setSelectedTrain }}> {children} </SelectedTrainContext.Provider>
}
