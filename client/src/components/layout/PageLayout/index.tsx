import { Breadcrumb, Layout, Menu } from "antd";
import type { MenuProps } from "antd";
import {
  AppstoreOutlined,
  UserOutlined,
  SwitcherOutlined
} from "@ant-design/icons";
import { Outlet, useLocation } from "react-router";
import { Link } from "react-router-dom";

import Header from "@/components/common/Header";
import "./style.scss";

const { Content, Sider } = Layout;

interface PropTypes {
  title?: string;
}

const PageLayout = ({ title }: PropTypes) => {
  const items: MenuProps["items"] = [
    {
      label: <Link to="/projects">Projects</Link>,
      icon: <SwitcherOutlined />,
      key: "projects"
    },
    {
      label: <Link to="/tasks">Tasks</Link>,
      icon: <AppstoreOutlined />,
      key: "tasks"
    },
    {
      label: <Link to="/profile">Profile</Link>,
      icon: <UserOutlined />,
      key: "profile"
    }
  ];

  const breadcrumbNameMap: Record<string, string> = {
    "/tasks": "Tasks",
    "/profile": "Profile",
    "/projects": "Projects",
    "/tasks/create": "Create task",
    "/projects/create": "Create project"
  };

  const location = useLocation();
  const pathSnippets = location.pathname.split("/").filter((i) => i);

  const extraBreadcrumbItems = pathSnippets.map((item, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join("/")}`;

    if (index === pathSnippets.length - 1) {
      return {
        key: url,
        title: breadcrumbNameMap[url] || `#${item}`
      };
    }
    return {
      key: url,
      title: <Link to={url}>{breadcrumbNameMap[url]}</Link>
    };
  });
  const breadcrumbItems = [
    {
      title: <Link to="/">Home</Link>,
      key: "home"
    }
  ].concat(extraBreadcrumbItems);
  return (
    <Layout className="page-layout site-layout" style={{ minHeight: "100vh" }}>
      <Header />
      <Layout hasSider>
        <Sider
          breakpoint="md"
          theme="light"
          collapsedWidth={45}
          style={{ boxShadow: "0px 3px 35.16px 0px rgba(0, 0, 0, 0.02)" }}
        >
          <Menu
            theme="light"
            items={items}
            defaultSelectedKeys={["projects"]}
            style={{ marginTop: "1rem" }}
          />
        </Sider>
        <Content
          style={{
            margin: "1.5rem",
            display: "flex",
            flexDirection: "column"
          }}
        >
          {title && <h2 className="page-layout__title">{title}</h2>}
          <Breadcrumb
            items={breadcrumbItems}
            className="breadcrumb"
            style={{ marginBottom: "1rem" }}
          />
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default PageLayout;
