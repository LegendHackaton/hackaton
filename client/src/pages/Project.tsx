import Task from "@/components/common/Task";
import { useAppSelector } from "@/hooks/useAppSelector";

const Project = () => {
  const tasks = useAppSelector((store) => store.tasks.items);
  return (
    <section>
      {tasks.map((item) => {
        return (
          <Task
            key={item.id}
            id={item.id}
            title={item.content}
            status="success"
          />
        );
      })}
    </section>
  );
};

export default Project;
