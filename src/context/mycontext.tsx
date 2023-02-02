
import { createContext, Dispatch, SetStateAction } from "react";
import { IPerson } from "../interfaces/IPerson";

export type IMyContextProps = {

    step: number,
    person: IPerson,


    setStep: Dispatch<SetStateAction<number>>

    setPerson: Dispatch<SetStateAction<IPerson>>

}

export const MyContext = createContext({} as IMyContextProps);
