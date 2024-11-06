import { FC } from "react";

const Header: FC = () => {
  return (
    <header className="container sticky top-0 mx-auto flex max-w-screen-2xl justify-between px-1 md:px-2 lg:px-4 xl:px-8">
      <div>Logo</div>
      <div>links</div>
    </header>
  );
};
export default Header;
