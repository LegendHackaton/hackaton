import FormLayout from "@/components/layout/ContentLayout";
import IconText from "@/components/ui/IconText";
import { useAppSelector } from "@/hooks/useAppSelector";
import {
  CalendarOutlined,
  CheckCircleOutlined,
  SolutionOutlined,
  TagsOutlined,
  UserOutlined
} from "@ant-design/icons";
import { Avatar, Divider, Tag, Typography } from "antd";
import { useParams } from "react-router-dom";

interface PropTypes {
  id?: number;
  title?: string;
  description?: string;
  startDate?: string;
  endDate?: string;
}
const Task = ({
  id = 1,
  title = "Title",
  description = "Description",
  startDate = "07.10.23",
  endDate = "07.10.23"
}: PropTypes) => {
  const params = useParams();
  const allTasks = useAppSelector((store) => store.tasks.items);
  const task = allTasks.find((item) => item.id === Number(params.id));
  return (
    <FormLayout>
      <Typography.Title level={3}>{task?.content}</Typography.Title>
      <ul
        className="task__list"
        style={{
          marginTop: "1.5rem",
          gap: "1rem",
          display: "flex",
          flexDirection: "column",
          fontWeight: 300
        }}
      >
        <li
          className="task__list-item"
          style={{
            fontSize: "12px",
            display: "flex",
            alignItems: "center",
            minHeight: "1.5rem"
          }}
        >
          <div style={{ width: "120px" }}>
            <IconText icon={<TagsOutlined />} text="Priority" />
          </div>

          <Tag color="red" style={{ fontSize: "12px" }}>
            High
          </Tag>
        </li>
        <li
          className="task__list-item"
          style={{
            fontSize: "12px",
            display: "flex",
            alignItems: "center",
            minHeight: "1.5rem"
          }}
        >
          <div style={{ width: "120px" }}>
            <IconText icon={<CheckCircleOutlined />} text="Status" />
          </div>

          <Tag color="success" style={{ fontSize: "12px" }}>
            Completed
          </Tag>
        </li>
        <li
          className="task__list-item"
          style={{
            fontSize: "12px",
            display: "flex",
            alignItems: "center",
            minHeight: "1.5rem"
          }}
        >
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
        <li
          className="task__list-item"
          style={{
            fontSize: "12px",
            display: "flex",
            alignItems: "center",
            minHeight: "1.5rem"
          }}
        >
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
        <li
          className="task__list-item"
          style={{
            fontSize: "12px",
            display: "flex",
            alignItems: "center",
            minHeight: "1.5rem"
          }}
        >
          <div style={{ width: "120px" }}>
            <IconText icon={<CalendarOutlined />} text="Start date" />
          </div>
          March 24th 2023
        </li>
        <li
          className="task__list-item"
          style={{
            fontSize: "12px",
            display: "flex",
            alignItems: "center",
            minHeight: "1.5rem"
          }}
        >
          <div style={{ width: "120px" }}>
            <IconText icon={<CalendarOutlined />} text="End date" />
          </div>
          March 24th 2023
        </li>
      </ul>
      <Divider />
      <p style={{ fontWeight: 300 }}>
        Lörem ipsum salig nen, ip-tv plus labesa. Eurov yk. Funktionell dumhet
        sabel som antiras mide. Heteron bionebelt preseling, divis peng. Trer
        beroren.
      </p>
    </FormLayout>
  );
};

export default Task;
