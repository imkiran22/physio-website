import React from "react";
import { Col, Row, Image, Typography, theme } from "antd";
import { ContactMetaList, Social } from "../../constants/contact";
import { ServicesDescription } from "../../constants/meta";
import SocialMediaComponent from "../SocialMedia/SocialMedia";
import Link from "next/link";

const { useToken } = theme;
const imagePath = "./physio.jpg";
const contactHeader = "Get In Touch";

const { Title, Paragraph, Text } = Typography;
const ContactComponent: React.FC = () => {
  const { token } = useToken();
  return (
    <Row className="contact" style={{ background: token["geekblue-4"] }}>
      <Col xs={24} sm={12} md={12} lg={12} xl={12} push={1}>
        <Image
          preview={false}
          width={"75%"}
          height={"94%"}
          src={imagePath}
          className={"contact_image"}
          alt="doctor image"
        />
      </Col>
      <Col xs={24} sm={12} md={12} lg={12} xl={12}>
        <Typography>
          <Title className="contact_main-title">{contactHeader}</Title>
          {ContactMetaList.map((list) => (
            <Paragraph>
              <Title level={2} className="contact_phone-title">
                {list.icon}
                <span className="pl-10">{list.title}</span>
              </Title>
              <Text style={{ fontSize: token.fontSizeHeading4 }}>
                <Link style={{ color: token["geekblue-10"] }} href={list.href}>
                  {list.value}
                </Link>
              </Text>
            </Paragraph>
          ))}
          <Paragraph>
            <Title level={2} className="contact_social">
              {Social.title}
            </Title>
            <SocialMediaComponent />
          </Paragraph>
          <Paragraph>
            <Title level={4} underline={false} className="contact_social">
              {"Disclaimer"}
            </Title>
            <Text>{ServicesDescription}</Text>
          </Paragraph>
        </Typography>
      </Col>
    </Row>
  );
};

export default ContactComponent;
