import {
  ClockCircleOutlined,
  CommentOutlined,
  PaperClipOutlined
} from "@ant-design/icons/lib/icons";
import { Tag, Typography } from "antd";
import { Link } from "react-router-dom";

import IconText from "@/components/ui/IconText";
import AvatarGroup from "@/components/ui/AvatarGroup";
import "./style.scss";
import { type TaskType } from "@/types/Tasks";

const Task = ({ id, title, description, status = "Open" }: TaskType) => {
  return (
    <div className="task">
      <div className="task__header">
        <Link to={`/tasks/${id}`}>
          <Typography.Title level={4} className="task__title">
            {title}
          </Typography.Title>
        </Link>
        <Tag
          color="success"
          bordered={false}
          style={{ marginRight: "auto", fontSize: "12px" }}
        >
          Completed
        </Tag>
        <IconText icon={<ClockCircleOutlined />} text="12 Days" />
      </div>
      <div className="task__content">
        <p className="task__description">{description}</p>
      </div>
      <div className="task__footer">
        <div className="task__icons">
          <IconText icon={<PaperClipOutlined />} text="5" />
          <IconText icon={<CommentOutlined />} text="8" />
        </div>
        <AvatarGroup />
      </div>
    </div>
  );
};

export default Task;
