import React from "react";
import { Row, Col, Typography, List, Image, theme } from "antd";
import { ServicesList, ServicesTitle } from "../../constants/meta";
const { Title, Paragraph } = Typography;
const { useToken } = theme;

const ServicesComponent: React.FC = () => {
  const { token } = useToken();
  return (
    <Row className="services" style={{ background: token.geekblue2 }}>
      <Col xs={24} sm={24} md={24} lg={24} xl={24}>
        <Typography>
          <Title className="services_main-title">{ServicesTitle}</Title>
          <Paragraph>
            {/* <Text className="services_description">{ServiceSub}</Text> */}
            <List
              itemLayout="horizontal"
              dataSource={ServicesList}
              renderItem={(item) => (
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
    </Row>
  );
};

export default ServicesComponent;
