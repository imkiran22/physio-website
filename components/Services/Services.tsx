import React from "react";
import { Row, Col, Typography, List, Avatar, Image } from "antd";
import {
  ServicesDescription,
  ServicesList,
  ServicesTitle,
  ServiceSub,
} from "../../constants/meta";
const { Title, Paragraph, Text } = Typography;

const ServicesComponent: React.FC = () => {
  return (
    <Row className="services">
      <Col xs={24} sm={14} md={14} lg={14} xl={14}>
        <Typography>
          <Title className="services_main-title">{ServicesTitle}</Title>
          <Paragraph>
            {/* <Text className="services_description">{ServiceSub}</Text> */}
            <List
              itemLayout="horizontal"
              dataSource={ServicesList}
              renderItem={(item, index) => (
                <List.Item>
                  <List.Item.Meta
                    // avatar={<Avatar src={item.image} />}
                    title={<a href="https://ant.design">{item.title}</a>}
                    description={item.description}
                  />
                </List.Item>
              )}
            />
          </Paragraph>
        </Typography>
      </Col>
      <Col xs={24} sm={10} md={10} lg={10} xl={10}>
        <Image
          className="about_image_container_image"
          preview={false}
          width={"100%"}
          height={"50vh"}
          src={"/physio-cover.jpg"}
          alt="about container image"
          style={{ float: "right" }}
        />
      </Col>
    </Row>
  );
};

export default ServicesComponent;
