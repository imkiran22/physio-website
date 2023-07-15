import React from "react";
import { Row, Col, Typography, List, Image, theme } from "antd";
import { ServicesList, ServicesTitle } from "../../constants/meta";
const { Title, Paragraph } = Typography;
const { useToken } = theme;

const ServicesComponent: React.FC = () => {
  const { token } = useToken();
  return (
    <Row
      gutter={{ xs: 24, sm: 24, md: 24, lg: 24 }}
      className="services"
      style={{ background: token.geekblue2 }}
    >
      <Col xs={24} sm={24} md={24} lg={24} xl={24}>
        <Typography>
          <Title className="services_main-title">{ServicesTitle}</Title>
          <Paragraph>
            <List
              itemLayout="horizontal"
              dataSource={ServicesList}
              renderItem={(item) => (
                <List.Item>
                  <List.Item.Meta
                    title={item.title}
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
