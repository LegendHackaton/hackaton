import { Draggable } from "react-beautiful-dnd";

import Task from "@/components/common/Task";
import "./style.scss";

interface PropTypes {
  id?: number;
  title?: string;
  description?: string;
  index: number;
}

const KanbanTask = ({
  id = 1,
  title = "Food Research",
  description = "Food design is required for our new project research the best practices.",
  index
}: PropTypes) => {
  return (
    <Draggable draggableId={id.toString()} key={id} index={index}>
      {(provided, snapshot) => {
        return (
          <div
            className="kanban-task"
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <Task />
          </div>
        );
      }}
    </Draggable>
  );
};

export default KanbanTask;
