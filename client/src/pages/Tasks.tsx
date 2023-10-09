import TasksSection from "@/components/common/Tasks";
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
