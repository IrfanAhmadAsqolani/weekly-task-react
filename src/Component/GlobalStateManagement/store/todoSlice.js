import { createSlice } from "@reduxjs/toolkit";

const initialValue = [ 
        {
            id: 1,
            title: "Mengerjakan Exercise",
            completed: true,
        },
        {
            id: 2,
            title: "Mengerjakan Assignment",
            completed: false,
        }
    ];

export const todoSlice = createSlice({
    name: "todo",
    initialState: {
        todos: initialValue
    },
    reducers:{
        eventCreateTugas: (state, action) =>  {
            state.todos = state.todos.concat(action.payload);
        },

        eventUpdateTugas: (state, action) =>  {
            const updateTugas = state.todos.map((value,index) => {
                if (index === action.payload) {
                    value.completed = !value.completed
                }
            })
        },
        eventDeleteTugas: (state, action) =>  {
            state.todos = state.todos.filter((value,index) => index !== action.payload);            
        },
    }
})

export const { eventCreateTugas, eventUpdateTugas, eventDeleteTugas } = todoSlice.actions;
export default todoSlice.reducer
