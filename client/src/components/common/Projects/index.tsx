// import { Pagination } from "antd";
import Project from "@/components/common/Project";
import "./style.scss";
import { Button, Input } from "antd";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <>
      <div className="kanban-header">
        <Input.Search />
        <Link to="create" className="kanban-header__button">
          <Button type="default">Create project</Button>
        </Link>
      </div>
      <section className="projects">
        {new Array(6).fill(null).map((el, i) => {
          return <Project key={i} />;
        })}
      </section>
      {/* <Pagination className="projects-pagination" defaultCurrent={1} total={50} /> */}
    </>
  );
};

export default Projects;
