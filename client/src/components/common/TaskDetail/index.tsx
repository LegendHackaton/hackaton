import {
  CalendarOutlined,
  CheckCircleOutlined,
  SolutionOutlined,
  TagsOutlined,
  UserOutlined
} from "@ant-design/icons";
import { Avatar, Divider, Tag, Typography } from "antd";
import { useParams } from "react-router-dom";

import FormLayout from "@/components/layout/ContentLayout";
import IconText from "@/components/ui/IconText";
import { useAppSelector } from "@/hooks/useAppSelector";
import "./style.scss";

const Task = () => {
  const { id } = useParams();
  const allTasks = useAppSelector((state) => state.tasks.items);
  const tasksList = Object.values(allTasks).flat();
  const task = tasksList.find((item) => item.id === Number(id));
  return (
    <FormLayout>
      <Typography.Title level={3}>{task?.title}</Typography.Title>
      <ul className="task-detail__list">
        <li className="task-detail__list-item">
          <div style={{ width: "120px" }}>
            <IconText icon={<TagsOutlined />} text="Priority" />
          </div>
          <Tag color="red" style={{ fontSize: "12px" }}>
            High
          </Tag>
        </li>
        <li className="task-detail__list-item">
          <div style={{ width: "120px" }}>
            <IconText icon={<CheckCircleOutlined />} text="Status" />
          </div>
          <Tag color="success" style={{ fontSize: "12px" }}>
            {task?.status}
          </Tag>
        </li>
        <li className="task-detail__list-item">
          <div style={{ width: "120px" }}>
            <IconText icon={<UserOutlined />} text="Owner" />
          </div>
          <Avatar
            size="small"
            style={{ marginRight: "0.5rem" }}
            src="https://img.freepik.com/photos-premium/portrait-affaires-homme-asiatique-bras-croises-carriere-gars-confiant-fond-studio-visage-homme-employe-bonheur-demarrage-succes-professionnel-sourire_590464-180234.jpg"
          />
          UI Sharks
        </li>
        <li className="task-detail__list-item">
          <div style={{ width: "120px" }}>
            <IconText icon={<SolutionOutlined />} text="Assigner" />
          </div>
          <Avatar
            size="small"
            style={{ marginRight: "0.5rem" }}
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHx8&w=1000&q=80"
          />
          UI Sharks
        </li>
        <li className="task-detail__list-item">
          <div style={{ width: "120px" }}>
            <IconText icon={<CalendarOutlined />} text="Start date" />
          </div>
          March 24th 2023
        </li>
        <li className="task-detail__list-item">
          <div style={{ width: "120px" }}>
            <IconText icon={<CalendarOutlined />} text="End date" />
          </div>
          March 24th 2023
        </li>
      </ul>
      <Divider />
      <p style={{ fontWeight: 300 }}>{task?.description}</p>
    </FormLayout>
  );
};

export default Task;
