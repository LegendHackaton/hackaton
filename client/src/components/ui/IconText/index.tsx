import "./style.scss";

interface PropTypes {
  icon: JSX.Element;
  text: string;
}

const IconText = ({ icon, text }: PropTypes) => {
  return (
    <div className="icon-text">
      {icon}
      {text}
    </div>
  );
};

export default IconText;
