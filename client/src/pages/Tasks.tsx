import TasksSection from "@/components/common/Kanban";
import { Outlet } from "react-router";

const Tasks = () => {
  return (
    <>
      <TasksSection />
      <Outlet />
    </>
  );
};

export default Tasks;
