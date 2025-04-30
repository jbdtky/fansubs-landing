import { useEffect } from "react";
import { Navbar } from "./elements/Navbar";
import { Footer } from "./elements/Footer";

export const Layout = ({ title, children }) => {
  useEffect(() => {
    document.title = title ?? "FanSubs: Easy Earnings. Happy Fans.";
  }, [title]);

  return (
    <>
      <Navbar />

      <main className="flex flex-col relative z-10">{children}</main>

      <Footer />
    </>
  );
};
