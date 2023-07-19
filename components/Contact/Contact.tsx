import React from "react";
import { Col, Row, Image, Typography, theme } from "antd";
import { ContactMetaList, Social } from "../../constants/contact";
import { ServicesDescription } from "../../constants/meta";
import SocialMediaComponent from "../SocialMedia/SocialMedia";
import Link from "next/link";
import { PRACTO_LINK } from "../../constants/doctor-details";

const PractoTitle = "Practo Appoinment";
const disclaimer = "Online Consultations";

const { useToken } = theme;
const imagePath = "./physio.jpg";
const contactHeader = "Get In Touch";

const { Title, Paragraph, Text } = Typography;
const ContactComponent: React.FC = () => {
  const { token } = useToken();
  return (
    <Row
      gutter={{ xs: 24, sm: 24, md: 24, lg: 24 }}
      className="contact"
      style={{ background: token["geekblue-3"] }}
    >
      <Col xs={24} sm={8} md={8} lg={8} xl={8}>
        <Image
          preview={false}
          src={imagePath}
          className={"contact_image"}
          alt="doctor image"
          width={"100%"}
        />
      </Col>
      <Col xs={24} sm={16} md={16} lg={16} xl={16}>
        <Typography>
          <div className="contact_main-title">{contactHeader}</div>
          {ContactMetaList.map((list) => (
            <Paragraph key={list.value}>
              <Text className="contact_phone-title">
                {list.icon}
                <span className="pl-10">{list.title}</span>
              </Text>
              <Text
                className="contact_phone-value pl-6"
                style={{ fontSize: token.fontSizeHeading4 }}
              >
                <Link style={{ color: "black" }} href={list.href}>
                  {list.value}
                </Link>
              </Text>
            </Paragraph>
          ))}
          {/* <Paragraph>
            <Title className="contact_social">{PractoTitle}</Title>
            <Text
              style={{
                padding: "0px 3px",
              }}
            >
              <Link target={"_blank"} href={PRACTO_LINK}>
                <Image
                  preview={false}
                  src={"/practo.png"}
                  width={"25px"}
                  height={"25px"}
                  alt="practo"
                />
              </Link>
            </Text>
          </Paragraph> */}
          <Paragraph>
            <Title className="contact_social">{Social.title}</Title>
            <SocialMediaComponent />
          </Paragraph>
          <Paragraph>
            <Text underline={false} className="contact_social">
              {disclaimer}
            </Text>
            <Text className="contact_social-value">{ServicesDescription}</Text>
          </Paragraph>
        </Typography>
      </Col>
    </Row>
  );
};

export default ContactComponent;
