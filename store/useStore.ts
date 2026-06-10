import {create}from "zustand";
type AppState = {
    steps:number;
    setSteps:(steps:number)=>void;
}

export const useStore = create<AppState>((set)=>({
    steps:0,
    
    setSteps:(steps)=>
        set({steps})
}))