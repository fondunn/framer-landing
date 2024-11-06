import { FC } from "react";
import { NAV_LINKS } from "@/config";
import Link from "next/link";

const NavList: FC = () => {
  return NAV_LINKS.map(({ label, href }, idx: number) => (
    <Link key={`${label}-${idx}`} href={href}>
      {label}
    </Link>
  ));
};

export default NavList;
