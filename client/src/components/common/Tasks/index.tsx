import { DragDropContext, type DropResult } from "react-beautiful-dnd";
import { useState } from "react";
import { Button, Input } from "antd";
import { Link } from "react-router-dom";

import KanbanColumn from "@/components/common/KanbanColumn";
import { insertItemIntoArray, moveItemWithinArray } from "@/utils/common";
import {
  type TaskStatusType,
  type TaskType,
  type TasksType
} from "@/types/Tasks";
import "./style.scss";

export const columns = {
  Open: [
    { id: 1, content: "Take out the garbage" },
    { id: 2, content: "Watch my favorite show" },
    { id: 3, content: "Charge my phone" },
    { id: 4, content: "Cook dinner" }
  ],
  Process: [
    { id: 5, content: "Take out the garbage" },
    { id: 6, content: "Watch my favorite show" },
    { id: 7, content: "Charge my phone" },
    { id: 8, content: "Cook dinner" }
  ],
  Completed: [
    { id: 9, content: "Take out the garbage" },
    { id: 10, content: "Watch my favorite show" },
    { id: 11, content: "Charge my phone" },
    { id: 12, content: "Cook dinner" }
  ]
};

const columnNames = Object.keys(columns) as TaskStatusType[];

const Tasks = () => {
  const [data, setData] = useState<TasksType>(columns);
  const dragEndHandler = ({ source, destination, draggableId }: DropResult) => {
    if (destination && source) {
      setData((data) => {
        const sourceColumn = source.droppableId as TaskStatusType;
        const destinationColumn = destination.droppableId as TaskStatusType;
        const sortedData = Object.assign({}, data);

        const draggableElem = sortedData[sourceColumn].find(
          (el) => el.id === Number(draggableId)
        );
        if (draggableElem) {
          if (sourceColumn === destinationColumn) {
            sortedData[sourceColumn] = moveItemWithinArray<TaskType>(
              sortedData[destinationColumn],
              draggableElem,
              destination.index
            );
          } else {
            sortedData[destinationColumn] = insertItemIntoArray<TaskType>(
              sortedData[destinationColumn],
              draggableElem,
              destination.index
            );
            sortedData[sourceColumn] = sortedData[sourceColumn].filter(
              (el) => el.id !== Number(draggableId)
            );
          }
        }

        return sortedData;
      });
    }
  };
  return (
    <section className="tasks">
      {/* <Title className="tasks__title" level={3}>
        Overview
      </Title>
      <p className="tasks__description">Edit or modify all card as you want</p>
      <Divider className="tasks__divider" /> */}
      {/* <Search className="tasks__search" placeholder="Search Tasks" /> */}
      <DragDropContext onDragEnd={dragEndHandler}>
        <div className="kanban-header">
          <Input.Search />
          <Link to="create" className="kanban-header__button">
            <Button type="default">Create task</Button>
          </Link>
        </div>
        <div className="kanban">
          {columnNames.map((column, i) => {
            return (
              <KanbanColumn key={i} id={column} items={data} title={column} />
            );
          })}
        </div>
      </DragDropContext>
    </section>
  );
};

export default Tasks;
