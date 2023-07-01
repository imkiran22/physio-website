import React from "react";
import {
  Col,
  Row,
  Card,
  Image,
  Typography,
  theme,
  Button,
  // Blockquote,
} from "antd";
import { aboutDoctor } from "../../constants/meta";
const { Title, Paragraph, Text } = Typography;

const { useToken } = theme;
const imagePath = "/physio.jpg";
const TestimonialComponent: React.FC = () => {
  const token = useToken();
  return (
    <Row
      gutter={{ xs: 24, sm: 24, md: 24, lg: 24 }}
      className="about"
      style={{ background: token.token.red2 }}
    >
      {/* <Col
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
        />
        <Typography className="about_image_container_testimonial">
          <Title
            className="about_image_container_testimonial_title"
            style={{ color: token.token["purple-10"] }}
          >
            Amrit Noronha said
          </Title>
          <Paragraph>
            <Text
              className="about_image_container_testimonial_description"
              style={{ color: token.token["purple-10"] }}
            >
              <blockquote>
                "Great attitude and careful and considerate doctor. He was very
                caring and helped in explaining the issue and what he needs to
                do."
              </blockquote>
            </Text>
          </Paragraph>
          <Title
            className="about_image_container_testimonial_title"
            style={{ color: token.token["purple-10"] }}
          >
            Verfied user said
          </Title>
          <Paragraph>
            <Text
              className="about_image_container_testimonial_description"
              style={{ color: token.token["purple-10"] }}
            >
              <Blockquote>
                "He's very kind and caring and expert in his specialization and
                available in all needy times. I recommened him with smile. "
              </Blockquote>
            </Text>
          </Paragraph>
        </Typography>
      </Col> */}
    </Row>
  );
};

export default TestimonialComponent;

//border-gray-200 border
