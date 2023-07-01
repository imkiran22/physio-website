import React from "react";
import { Col, Row, Card, Image, Typography, theme, Button } from "antd";
import {
  aboutDoctor,
  aboutTitle,
  testimonialQuote,
  title,
} from "../../constants/meta";
const { Title, Paragraph, Text } = Typography;

const { useToken } = theme;
const imagePath = "/physio.jpg";
const AboutComponent: React.FC = () => {
  const token = useToken();
  return (
    <Row
      gutter={{ xs: 24, sm: 24, md: 24, lg: 24 }}
      className="about"
      style={{ background: token.token.red2 }}
    >
      <Col xs={24} sm={12} md={12} lg={12} xl={12}>
        <Typography>
          <Title className="about_main-title">{aboutTitle}</Title>
          <Paragraph>
            <Text className="about_description">{aboutDoctor}</Text>
          </Paragraph>
        </Typography>
      </Col>
      <Col
        xs={24}
        sm={12}
        md={12}
        lg={12}
        xl={12}
        className={"about_image_container"}
      >
        <Image
          className="about_image_container_image"
          preview={false}
          width={"100%"}
          height={"100%"}
          src={imagePath}
          alt="about container image"
        />
        <Typography className="about_image_container_testimonial">
          <Paragraph>
            <Text
              className="about_image_container_testimonial_description"
              style={{ color: token.token.colorWhite }}
            >
              <blockquote>{testimonialQuote}</blockquote>
            </Text>
          </Paragraph>
        </Typography>
      </Col>
    </Row>
  );
};

export default AboutComponent;

//border-gray-200 border
