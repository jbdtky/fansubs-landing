import { useLayoutEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { Layout } from "./components/Layout";
import { Cards } from "./components/sections/Cards";
import { Hero } from "./components/sections/Hero";
import { Screen } from "./components/sections/Screen";
import { ImageText } from "./components/sections/ImageText";
import { List } from "./components/sections/List";
import { GetStarted } from "./components/sections/GetStarted";
import { Socials } from "./components/sections/Socials";
import { Analytics } from "@vercel/analytics/react";

const Wrapper = ({ children }) => {
  const location = useLocation();

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [location.pathname]);

  return children;
};

function HomePage() {
  return (
    <Layout>
      <Hero />
      <Screen />
      <Cards />
      <ImageText />
      <List />
      <GetStarted />
      <Socials />
      <Analytics />
    </Layout>
  );
}

function App() {
  return (
    <Router>
      <Wrapper>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Wrapper>
    </Router>
  );
}

export default App;
