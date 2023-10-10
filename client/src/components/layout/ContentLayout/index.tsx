import "./style.scss";

interface PropTypes {
  children?: React.ReactNode;
}

const ContentLayout = ({ children }: PropTypes) => {
  return <div className="content-layout">{children}</div>;
};

export default ContentLayout;
