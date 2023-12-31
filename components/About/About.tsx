import React from "react";
import { Col, Row, Image, Typography, theme } from "antd";
import { aboutDoctor, aboutTitle } from "../../constants/meta";

const { Paragraph, Text } = Typography;

const { useToken } = theme;
const imagePath = "/treatment.jpeg";

const quotes = [
  `"Great attitude and careful and considerate doctor. He was
  very caring and helped in explaining the issue and what he needs
  to do"`,
  `"He's very kind and caring and expert in his specialization
and available in all needy times. I recommened him with smile."`,
];
const AboutComponent: React.FC = () => {
  const { token } = useToken();
  return (
    <Row
      gutter={{ xs: 24, sm: 24, md: 24, lg: 24 }}
      className="about"
      style={{ background: token["geekblue-3"] }}
    >
      <Col xs={24} sm={14} md={14} lg={14} xl={14}>
        <Typography>
          <div className="about_main-title">{aboutTitle}</div>
          <Paragraph>
            <Text className="about_description">{aboutDoctor}</Text>
          </Paragraph>
        </Typography>
      </Col>
      <Col
        xs={24}
        sm={10}
        md={10}
        lg={10}
        xl={10}
        className={"about_image_container"}
      >
        <Image
          className="about_image_container_image"
          preview={false}
          width={"100%"}
          height={"50vh"}
          src={imagePath}
          alt="about container image"
        />
        <Typography className="about_image_container_testimonial">
          <Text
            className="about_image_container_testimonial_title"
            style={{ color: token["geekblue-2"] }}
          >
            <code>Amrit Noronha said</code>
          </Text>
          <Paragraph>
            <Text
              className="about_image_container_testimonial_description"
              style={{ color: token["geekblue-2"] }}
            >
              <blockquote>{quotes[0]}</blockquote>
            </Text>
          </Paragraph>
          <Text
            className="about_image_container_testimonial_title"
            style={{ color: token["geekblue-2"] }}
          >
            <code>Verified user said</code>
          </Text>
          <Paragraph>
            <Text
              className="about_image_container_testimonial_description"
              style={{ color: token["geekblue-2"] }}
            >
              <blockquote>{quotes[1]}</blockquote>
            </Text>
          </Paragraph>
        </Typography>
      </Col>
    </Row>
  );
};

export default AboutComponent;
