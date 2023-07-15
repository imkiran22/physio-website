import React from "react";
import { Image, Typography, theme } from "antd";
import { PRACTO_LINK } from "../../constants/doctor-details";
import { Social } from "../../constants/contact";
import Link from "next/link";

const { useToken } = theme;

const { Text } = Typography;

const SocialMediaComponent: React.FC = () => {
  const { token } = useToken();
  return (
    <>
      {Social.iconList.map((i) => (
        <Text
          style={{
            padding: "0px 3px",
            fontSize: token.fontSizeHeading4,
          }}
        >
          <Link
            style={{
              color: i.colorCode,
            }}
            target={"_blank"}
            href={i.url}
          >
            {i.icon}
          </Link>
        </Text>
      ))}
      <Text
        style={{
          padding: "0px 3px",
          fontSize: token.fontSizeHeading4,
        }}
      >
        <Link target={"_blank"} href={PRACTO_LINK}>
          <Image
            preview={false}
            src={"/practo.png"}
            width={"20px"}
            height={"18px"}
            style={{ verticalAlign: "top" }}
          />
        </Link>
      </Text>
    </>
  );
};

export default SocialMediaComponent;
