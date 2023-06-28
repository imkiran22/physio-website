import React from "react";
import HeaderStyle from "./Header.module.scss";
import Link from "next/link";
// import Image from "next/image";
import { useRouter } from "next/router";
import { HEADER_MENU_ITEMS } from "../../constants/menu";

const HeaderComponent: React.FC = () => {
  const router = useRouter();
  console.log(router.pathname);
  return (
    <nav className={`${HeaderStyle.header} flex justify-end`}>
      <ul className={`${HeaderStyle.menu} flex justify-between basis-6/12`}>
        {HEADER_MENU_ITEMS.map((header) => (
          <li
            className={`${HeaderStyle["menu-item"]} text-indigo-600 ${
              router.pathname === `/${header.key}` ? HeaderStyle.active : ""
            }`}
            key={header.key}
          >
            <Link href={header.key}>{header.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default HeaderComponent;
