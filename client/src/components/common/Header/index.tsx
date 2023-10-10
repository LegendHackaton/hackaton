import { Layout, Avatar } from "antd";
import { Link } from "react-router-dom";

import "./style.scss";

const Header = () => {
  return (
    <Layout.Header className="header">
      <Link to="/" className="header__logo">NeoHack</Link>
      <Link to="/profile" className="header__user">
        <div className="header__user-info">
          <span className="header__user-name">Anima Agrawal</span>
          <span className="header__user-desc">UX Developer</span>
        </div>
        <Avatar className="header__avatar" src="https://img.freepik.com/photos-premium/portrait-affaires-homme-asiatique-bras-croises-carriere-gars-confiant-fond-studio-visage-homme-employe-bonheur-demarrage-succes-professionnel-sourire_590464-180234.jpg"/>
      </Link>
    </Layout.Header>
  );
};

export default Header;
