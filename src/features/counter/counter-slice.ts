import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// createSlice is the main API function used to define your redux logic
// payloadaction is a type that represents the contents of a single action object

interface CounterState{
    value: number
}

const initialState: CounterState = {
    value: 0
}

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        
        // increment
        incremented(state){
            state.value++
            // this "mutating" approach only possible with redux toolkit - not vanilla redux
            // thanks to something called "immer", which makes it immutable under the hood

        },

        amountAdded: (state, action: PayloadAction<number>) => {
            console.log({action});
            
            state.value += action.payload
        }

        // decrement

        // reset
    }
})


export const {incremented, amountAdded} = counterSlice.actions 

export default counterSlice.reducer