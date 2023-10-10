import { ConfigProvider } from "antd";
import { Routes, Route } from "react-router-dom";
import "@/assets/scss/index.scss";

import PageLayout from "@/components/layout/PageLayout";
import Tasks from "@/pages/Tasks";
import Profile from "@/pages/Profile";
import Projects from "@/pages/Projects";
import Project from "@/pages/Project";
import CreateTask from "@/pages/CreateTask";
import CreateProject from "@/pages/CreateProject";
import Task from "@/pages/Task";
import { theme } from "@/theme";

const App = () => {
  return (
    <ConfigProvider theme={theme}>
      <Routes>
        <Route path="/" element={<PageLayout />}>
          <Route path="projects">
            <Route index element={<Projects />} />
            <Route path="create" element={<CreateProject />} />
            <Route path=":id">
              <Route index element={<Project />} />
            </Route>
          </Route>
          <Route path="tasks">
            <Route index element={<Tasks />} />
            <Route path="create" element={<CreateTask />} />
            <Route path=":id">
              <Route index element={<Task />} />
            </Route>
          </Route>
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </ConfigProvider>
  );
};

export default App;
