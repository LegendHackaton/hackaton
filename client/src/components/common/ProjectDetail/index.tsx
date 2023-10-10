import { Tag, Typography } from "antd";
import { FolderOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import IconText from "@/components/ui/IconText";
import AvatarGroup from "@/components/ui/AvatarGroup";
import "./style.scss";

interface PropTypes {
  id?: number;
}

const ProjectDetail = ({ id = 1 }: PropTypes) => {
  return (
    <div className="project">
      <div className="project__header">
        <Link key={id} to={`/projects/${id}`}>
          <Typography.Title level={3}>Adoddle</Typography.Title>
        </Link>
        <Tag color="success" bordered={false} className="project__tag">
          Completed
        </Tag>
      </div>
      {/* <Divider className="project__divider" /> */}
      <p className="project__description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      {/* <span className="project__deadline">
    Deadline: <span>05 November 2023</span>
  </span> */}
      <div className="project__bottom">
        <AvatarGroup />
        <IconText icon={<FolderOutlined />} text="14 issues" />
      </div>
    </div>
  );
};

export default ProjectDetail;
