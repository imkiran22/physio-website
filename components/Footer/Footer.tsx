import React from "react";
import { Footer } from "antd/lib/layout/layout";
import {
  COPY_RIGHT,
  FB_PROFILE,
  IG_PROFILE,
  FOLLOW_US,
} from "../../constants/footer";
import { InstagramOutlined, FacebookFilled } from "@ant-design/icons";

const FooterComponent: React.FC = () => {
  return (
    <Footer className="footer">
      <div className="copyright">{COPY_RIGHT}</div>
      <div className="socialMedia">
        <span className="title">{FOLLOW_US}</span>
        <a className="fb" target={"_blank"} rel="noreferrer" href={FB_PROFILE}>
          <FacebookFilled />
        </a>
        <a className="ig" target={"_blank"} rel="noreferrer" href={IG_PROFILE}>
          <InstagramOutlined />
        </a>
      </div>
    </Footer>
  );
};

export default FooterComponent;
