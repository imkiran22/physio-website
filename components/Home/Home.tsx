import React from "react";
import { serviceButtonText, title } from "../../constants/meta";
import { Col, Row, Image, Typography, Button } from "antd";
import {
  doctorField,
  doctorWithQualifications,
  PRACTO_LINK,
} from "../../constants/doctor-details";
import { theme } from "antd";
import Link from "next/link";
const { Title, Paragraph, Text } = Typography;

const imagePath = "/kannan-selfie-mask.jpeg";
const { useToken } = theme;

const HomeComponent: React.FC = ({}) => {
  const { token } = useToken();
  return (
    <Row
      gutter={{ xs: 24, sm: 24, md: 24, lg: 24 }}
      className={"home"}
      style={{ background: token["geekblue-2"] }}
    >
      {/* <Col xs={4} sm={4} md={4} lg={4} xl={4}>
        
      </Col> */}
      <Col xs={24} sm={24} md={24} lg={24} xl={24}>
        <Typography>
          <Image
            preview={false}
            width={"20%"}
            src={imagePath}
            className={"home_image"}
            alt="doctor image"
          />
          <Title className="home_main-title">{doctorWithQualifications}</Title>
          <Title underline={true} level={2} className="home_sub-title">
            {doctorField}
          </Title>
          <Paragraph>
            <Text className="home_description">{title}</Text>
          </Paragraph>
        </Typography>

        <Link target={"_blank"} href={PRACTO_LINK}>
          <Button
            type="primary"
            size="middle"
            style={{ fontFamily: "Quicksand", letterSpacing: "2px" }}
          >
            {" "}
            {serviceButtonText}
          </Button>
        </Link>
      </Col>
    </Row>
  );
};

export default HomeComponent;
