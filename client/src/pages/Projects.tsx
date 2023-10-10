import ProjectsSection from "@/components/common/Projects";
import { Outlet } from "react-router";

const Projects = () => {
  return (
    <>
      <ProjectsSection />
      <Outlet />
    </>
  );
};

export default Projects;
