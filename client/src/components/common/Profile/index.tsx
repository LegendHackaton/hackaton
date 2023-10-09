import { Divider } from "antd";
import "./style.scss";
import IconText from "../../ui/IconText";
import {
  MailOutlined,
  PhoneOutlined,
  TeamOutlined,
  UserOutlined
} from "@ant-design/icons";

const Profile = () => {
  return (
    <div className="user-info">
      <img
        src="https://img.freepik.com/photos-premium/portrait-affaires-homme-asiatique-bras-croises-carriere-gars-confiant-fond-studio-visage-homme-employe-bonheur-demarrage-succes-professionnel-sourire_590464-180234.jpg"
        className="user-info__pic"
      />
      <ul className="user-info__list">
        <li>
          <b>Yash Ghori</b>
        </li>
        <li>Ahmedabad, Gujarat</li>
        <li>India</li>
      </ul>
      <Divider />
      <ul className="user-info__list user-info__list_icon">
        <li>
          <IconText icon={<UserOutlined />} text="UI - Intern" />
        </li>
        <li>
          <IconText icon={<PhoneOutlined />} text="+91 7048144030" />
        </li>
        <li>
          <IconText icon={<MailOutlined />} text="yghori@asite.com" />
        </li>
        <li>
          <IconText icon={<TeamOutlined />} text="PDT - I" />
        </li>
      </ul>
    </div>
  );
};

export default Profile;
