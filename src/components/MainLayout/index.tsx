import { FC, ReactNode } from "react";

interface MainLayoutProps {
  children?: ReactNode;
}
const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <main className="container sticky top-0 mx-auto max-w-screen-2xl px-1 md:px-2 lg:px-4 xl:px-8">
      {children}
    </main>
  );
};

export default MainLayout;
