import { DragDropContext, type DropResult } from "react-beautiful-dnd";

import KanbanColumn from "@/components/common/Kanban/KanbanColumn";
import { type TaskStatusType } from "@/types/Tasks";
import { useAppSelector } from "@/hooks/useAppSelector";
import { moveKanbanTask } from "@/store/slices/tasksSlice";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import "./style.scss";
import TasksHeader from "../Tasks/TasksHeader";

const Kanban = () => {
  const kanbanTasks = useAppSelector((store) => store.tasks.items);
  const columnNames = Object.keys(kanbanTasks) as TaskStatusType[];

  const dispatch = useAppDispatch();
  const dragEndHandler = (dropResult: DropResult) => {
    dispatch(moveKanbanTask(dropResult));
  };

  return (
    <section>
      <DragDropContext onDragEnd={dragEndHandler}>
        <TasksHeader />
        <div className="kanban">
          {columnNames.map((column, i) => {
            return (
              <KanbanColumn
                key={i}
                id={column}
                items={kanbanTasks}
                title={column}
              />
            );
          })}
        </div>
      </DragDropContext>
    </section>
  );
};

export default Kanban;
