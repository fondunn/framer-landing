import { FC } from "react";
import NavList from "@/components/NavList";
import { SITE_NAME } from "@/config";
import Link from "next/link";

const Header: FC = () => {
  return (
    <header className="sticky top-0 z-50 flex h-10 items-center bg-stone-200/80 md:h-14">
      <div className="container mx-auto flex max-w-screen-2xl items-center justify-between px-1 md:px-2 lg:px-4 xl:px-8">
        <div>
          <Link href="/" className="font-bold uppercase">
            {SITE_NAME}
          </Link>
        </div>
        <div className="flex gap-2">
          <NavList />
        </div>
      </div>
    </header>
  );
};
export default Header;
