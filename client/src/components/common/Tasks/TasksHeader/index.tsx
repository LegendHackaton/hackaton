import { Button, Input } from "antd";
import { Link } from "react-router-dom";

import "./style.scss";

const TasksHeader = () => {
  return (
    <div className="tasks-header">
      <Input.Search />
      <Link to="create" className="tasks-header__button">
        <Button type="default">Create task</Button>
      </Link>
    </div>
  );
};

export default TasksHeader;
