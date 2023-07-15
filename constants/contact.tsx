import {
  PhoneOutlined,
  MailOutlined,
  FacebookFilled,
  InstagramFilled,
  TwitterCircleFilled,
  InstagramOutlined,
} from "@ant-design/icons";

export const ContactMetaList = [
  {
    title: "Phone",
    value: "+91 78926 36110",
    href: "tel:+917892636110",
    icon: <PhoneOutlined />,
  },
  {
    title: "Email",
    value: "kannan.physio@yahoo.com",
    href: "mailto:Kannan.physio@yahoo.com",
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
