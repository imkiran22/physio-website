import {
  PhoneOutlined,
  MailOutlined,
  FacebookFilled,
  InstagramOutlined,
} from "@ant-design/icons";
import { CELL, EMAIL_ID } from "./doctor-details";

export const ContactMetaList = [
  {
    title: "Phone",
    value: CELL,
    href: `tel:${CELL}`,
    icon: <PhoneOutlined />,
  },
  {
    title: "Email",
    value: EMAIL_ID,
    href: `mailto:${EMAIL_ID}`,
    icon: <MailOutlined />,
  },
];

export const Social = {
  title: "Social",
  iconList: [
    {
      icon: <FacebookFilled />,
      url: "https://facebook.com",
      colorCode: "#001d66",
    },
    {
      icon: <InstagramOutlined />,
      url: "https://www.instagram.com/sundarajankannan/",
      colorCode: "#f5222d",
    },
  ],
};
