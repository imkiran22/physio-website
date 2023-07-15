import React from "react";
import { Footer } from "antd/lib/layout/layout";
import {
  COPY_RIGHT,
  FB_PROFILE,
  IG_PROFILE,
  FOLLOW_US,
} from "../../constants/footer";
import { InstagramOutlined, FacebookFilled } from "@ant-design/icons";
import { theme, Typography } from "antd";
import SocialMediaComponent from "../SocialMedia/SocialMedia";

const { useToken } = theme;

const { Text } = Typography;

const FooterComponent: React.FC = () => {
  const token = useToken();
  return (
    <Footer className="footer" style={{ background: token.token["purple-1"] }}>
      <div className="copyright">{COPY_RIGHT}</div>
      <Text className="social-media" strong={true}>
        <span className="title">{FOLLOW_US}</span>
        <SocialMediaComponent />
      </Text>
    </Footer>
  );
};

export default FooterComponent;
