import { Droppable } from "react-beautiful-dnd";
import KanbanTask from "../KanbanTask";
import { type TaskStatusType, type TasksType } from "@/types/Tasks";
import "./style.scss";

interface PropTypes {
  id: TaskStatusType;
  title: string;
  items: TasksType;
}

const KanbanColumn = ({ id, items, title }: PropTypes) => {
  return (
    <Droppable droppableId={id}>
      {(provided) => (
        <div className="kanban-column">
          <div className="kanban-column__header">{title}</div>
          <div
            className="kanban-column__content"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {items[id].map((item, i) => {
              return <KanbanTask key={item.id} index={i} item={item} />;
            })}
            {provided.placeholder}
          </div>
        </div>
      )}
    </Droppable>
  );
};

export default KanbanColumn;
