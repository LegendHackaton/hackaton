import Task from "@/components/common/Task";
import { useAppSelector } from "@/hooks/useAppSelector";
import "./style.scss";

const TasksList = () => {
  const tasks = useAppSelector((store) => store.tasks.items);
  const tasksList = Object.values(tasks).flat();
  return (
    <ul className="tasks-list">
      {tasksList.map((item) => {
        return <Task key={item.id} {...item} />;
      })}
    </ul>
  );
};

export default TasksList;
