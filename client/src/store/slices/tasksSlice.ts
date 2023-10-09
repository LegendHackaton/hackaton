import { type TaskType } from "@/types/Tasks";
import { type PayloadAction, createSlice } from "@reduxjs/toolkit";

interface TasksStateType {
  items: TaskType[];
}

const initialState: TasksStateType = {
  items: [
    { id: 1, content: "Take out the garbage", status: "Open" },
    { id: 2, content: "Watch my favorite show", status: "Open" },
    { id: 3, content: "Charge my phone", status: "Open" },
    { id: 4, content: "Cook dinner", status: "Open" },
    { id: 5, content: "Take out the garbage", status: "Process" },
    { id: 6, content: "Watch my favorite show", status: "Process" },
    { id: 7, content: "Charge my phone", status: "Open" },
    { id: 8, content: "Cook dinner", status: "Open" },
    { id: 9, content: "Take out the garbage", status: "Open" },
    { id: 10, content: "Watch my favorite show", status: "Open" },
    { id: 11, content: "Charge my phone", status: "Open" },
    { id: 12, content: "Cook dinner", status: "Open" }
  ]
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<TaskType>) => {
      state.items.push(action.payload);
    }
  }
});

export const { addTask } = tasksSlice.actions;
export default tasksSlice.reducer;
