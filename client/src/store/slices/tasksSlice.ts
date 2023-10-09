import {
  type TaskStatusType,
  type TasksType,
  type TaskType
} from "@/types/Tasks";
import { insertItemIntoArray, moveItemWithinArray } from "@/utils/common";
import { type PayloadAction, createSlice } from "@reduxjs/toolkit";
import { type DropResult } from "react-beautiful-dnd";

interface TasksStateType {
  items: TasksType;
}

const initialState: TasksStateType = {
  items: {
    Open: [
      {
        id: 1,
        title: "Take out the garbage",
        description: "Take out the garbage",
        status: "Open"
      },
      {
        id: 2,
        title: "Watch my favorite show",
        description: "Take out the garbage",
        status: "Open"
      },
      {
        id: 3,
        title: "Charge my phone",
        description: "Take out the garbage",
        status: "Open"
      },
      {
        id: 4,
        title: "Cook dinner",
        description: "Take out the garbage",
        status: "Open"
      }
    ],
    Process: [
      {
        id: 5,
        title: "Take out the garbage",
        description: "Take out the garbage",
        status: "Process"
      },
      {
        id: 6,
        title: "Watch my favorite show",
        description: "Take out the garbage",
        status: "Process"
      },
      {
        id: 7,
        title: "Charge my phone",
        description: "Take out the garbage",
        status: "Process"
      },
      {
        id: 8,
        title: "Cook dinner",
        description: "Take out the garbage",
        status: "Process"
      }
    ],
    Completed: [
      {
        id: 9,
        title: "Take out the garbage",
        description: "Take out the garbage",
        status: "Completed"
      },
      {
        id: 10,
        title: "Watch my favorite show",
        description: "Take out the garbage",
        status: "Completed"
      },
      {
        id: 11,
        title: "Charge my phone",
        description: "Take out the garbage",
        status: "Completed"
      }
    ]
  }
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<TaskType>) => {
      state.items[action.payload.status].push(action.payload);
    },
    moveKanbanTask: (state, action: PayloadAction<DropResult>) => {
      const { source, destination, draggableId } = action.payload;
      if (destination && source) {
        const sourceColumn = source.droppableId as TaskStatusType;
        const destinationColumn = destination.droppableId as TaskStatusType;

        const draggableElem = state.items[sourceColumn].find(
          (el) => el.id === Number(draggableId)
        );
        if (draggableElem) {
          if (sourceColumn === destinationColumn) {
            state.items[sourceColumn] = moveItemWithinArray<TaskType>(
              state.items[destinationColumn],
              draggableElem,
              destination.index
            );
          } else {
            draggableElem.status = destinationColumn;
            state.items[destinationColumn] = insertItemIntoArray<TaskType>(
              state.items[destinationColumn],
              draggableElem,
              destination.index
            );
            state.items[sourceColumn] = state.items[sourceColumn].filter(
              (el) => el.id !== Number(draggableId)
            );
          }
        }
      }
    }
  }
});

export const { addTask, moveKanbanTask } = tasksSlice.actions;
export default tasksSlice.reducer;
