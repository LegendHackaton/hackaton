import { Draggable } from "react-beautiful-dnd";

import Task from "@/components/common/Task";
import "./style.scss";
import { type TaskType } from "@/types/Tasks";

interface PropTypes {
  index: number;
  item: TaskType;
}

const KanbanTask = ({ item, index }: PropTypes) => {
  return (
    <Draggable draggableId={item.id.toString()} key={item.id} index={index}>
      {(provided) => {
        return (
          <div
            className="kanban-task"
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <Task {...item}/>
          </div>
        );
      }}
    </Draggable>
  );
};

export default KanbanTask;
