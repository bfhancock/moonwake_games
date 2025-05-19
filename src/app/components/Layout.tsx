import { ReactNode } from "react";
import Footer from "./ui/Footer";
import Header from "./ui/Header";
import { cn } from "../../../utils/twMerge";

type Props = {
  children: ReactNode;
  className?: string;
};

const Layout = ({ children, className }: Props) => {
  return (
    <main
      className={cn("w-full flex flex-col items-center bg-white", className)}
    >
      <Header />
      {children}
      <Footer />
    </main>
  );
};

export default Layout;
