import { FC } from "react";
import NavList from "@/components/NavList";
import { SITE_NAME } from "@/config";
import Link from "next/link";

const Header: FC = () => {
  return (
    <header className="container sticky top-0 mx-auto flex max-w-screen-2xl justify-between bg-stone-200/80 px-1 py-2 md:px-2 md:py-4 lg:px-4 xl:px-8">
      <div>
        <Link href="/">{SITE_NAME}</Link>
      </div>
      <div className="flex gap-2">
        <NavList />
      </div>
    </header>
  );
};
export default Header;
