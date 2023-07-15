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
const imagePath = "/treatment.jpeg";
const AboutComponent: React.FC = () => {
  const token = useToken();
  return (
    <Row
      gutter={{ xs: 24, sm: 24, md: 24, lg: 24 }}
      className="about"
      style={{ background: token.token.red2 }}
    >
      <Col xs={24} sm={14} md={14} lg={14} xl={14}>
        <Typography>
          <Title className="about_main-title">{aboutTitle}</Title>
          <Paragraph>
            {/* <Image
              className="about_image_container_image"
              preview={false}
              width={"20%"}
              height={"auto"}
              src={"/dr-kannan-passport.jpeg"}
              alt="about container image"
              style={{ float: "right" }}
            /> */}
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
