// import { MoreOutlined } from "@ant-design/icons";
import KanbanTask from "../KanbanTask";
import "./style.scss";
import { Droppable } from "react-beautiful-dnd";
import { type columns } from "@/components/common/Tasks";

interface PropTypes {
  id: keyof typeof columns;
  title: string;
  items: typeof columns;
}

const KanbanColumn = ({ id, items, title }: PropTypes) => {
  return (
    <Droppable droppableId={id}>
      {(provided) => (
        <div className="kanban-column">
          <div className="kanban-column__header">
            {title}
            {/* <MoreOutlined rotate={90} style={{ fontSize: "1.2rem" }} /> */}
          </div>
          <div
            className="kanban-column__content"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {items[id].map((item, i) => {
              return (
                <KanbanTask
                  key={item.id}
                  id={item.id}
                  index={i}
                  title={item.content}
                />
              );
            })}
            {provided.placeholder}
          </div>
        </div>
      )}
    </Droppable>
  );
};

export default KanbanColumn;
