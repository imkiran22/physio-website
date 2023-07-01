import React from "react";
import { serviceButtonText, title } from "../../constants/meta";
const imagePath = "/dr_kannan.jpeg";
import { Col, Row, Image, Typography, Button } from "antd";
import {
  doctorField,
  doctorWithQualifications,
} from "../../constants/doctor-details";
const { Title, Paragraph, Text } = Typography;

const HomeComponent: React.FC = ({}) => {
  return (
    <Row
      gutter={{ xs: 24, sm: 24, md: 24, lg: 24 }}
      className={"home_container"}
    >
      <Col xs={24} sm={12} md={12} lg={12} xl={12} push={1}>
        <Image
          preview={false}
          width={"80%"}
          height={"100%"}
          src={imagePath}
          alt="doctor image"
        />
      </Col>
      <Col xs={24} sm={12} md={12} lg={12} xl={12}>
        <Typography>
          <Title className="home_main-title">{doctorWithQualifications}</Title>
          <Title underline={true} level={2} className="home_sub-title">
            {doctorField}
          </Title>
          <Paragraph>
            <Text className="home_description">{title}</Text>
          </Paragraph>
        </Typography>
        <Button
          type="primary"
          size="large"
          style={{ fontFamily: "Quicksand", letterSpacing: "2px" }}
        >
          {serviceButtonText}
        </Button>
      </Col>
    </Row>
  );
};

export default HomeComponent;
