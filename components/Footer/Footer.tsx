import React from "react";
import { Footer } from "antd/lib/layout/layout";
import {
  COPY_RIGHT,
  FB_PROFILE,
  IG_PROFILE,
  FOLLOW_US,
} from "../../constants/footer";
import { InstagramOutlined, FacebookFilled } from "@ant-design/icons";
import { Image, theme } from "antd";
import { PRACTO_LINK } from "../../constants/doctor-details";

const { useToken } = theme;

const FooterComponent: React.FC = () => {
  const token = useToken();
  return (
    <Footer className="footer" style={{ background: token.token["purple-1"] }}>
      <div className="copyright">{COPY_RIGHT}</div>
      <div className="social-media">
        <span className="title">{FOLLOW_US}</span>
        <a className="fb" target={"_blank"} rel="noreferrer" href={FB_PROFILE}>
          <FacebookFilled style={{ fontSize: "16px" }} />
        </a>
        <a
          className="practo"
          target={"_blank"}
          rel="noreferrer"
          href={PRACTO_LINK}
        >
          <Image preview={false} src={"/practo.png"} width={"16px"} />
        </a>
      </div>
    </Footer>
  );
};

export default FooterComponent;
