import { Navbar } from "./elements/Navbar";
import { Footer } from "./elements/Footer";

export const Layout = ({ title, children }) => {
  return (
    <>
      <Navbar />

      <main className="flex flex-col relative z-10">{children}</main>

      <Footer />
    </>
  );
};
