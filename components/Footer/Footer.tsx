import React from "react";
import { Footer } from "antd/lib/layout/layout";
import { COPY_RIGHT, FOLLOW_US } from "../../constants/footer";
import { theme, Typography } from "antd";
import SocialMediaComponent from "../SocialMedia/SocialMedia";

const { useToken } = theme;

const { Text } = Typography;

const FooterComponent: React.FC = () => {
  const { token } = useToken();
  return (
    <Footer className="footer" style={{ background: token.geekblue3 }}>
      <div className="copyright">{COPY_RIGHT}</div>
      <Text className="social-media" strong={true}>
        <span className="title">{FOLLOW_US}</span>
        <SocialMediaComponent />
      </Text>
    </Footer>
  );
};

export default FooterComponent;
