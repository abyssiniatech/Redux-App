import { createSlice } from "@reduxjs/toolkit"
const initialState={
    value:0
}
const Counter1slice =createSlice({
name:"counter",
initialState,
reducers: {
increment:(state)=>{
    state.value +=1
},
decrement: (state)=>{
  state.value -=1
},
reset:(state) =>{
    state.value =0


},
}
})
export const { increment,decrement,reset } = Counter1slice.actions;

export default Counter1slice.reducer
