import { useLayoutEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { Layout } from "./components/Layout"
import { Cards } from "./components/sections/Cards";
import { Hero } from "./components/sections/Hero";
import { Screen } from "./components/sections/Screen";
import { ImageText } from "./components/sections/ImageText";
import { List } from "./components/sections/List";
import { GetStarted } from "./components/sections/GetStarted";
import { Socials } from "./components/sections/Socials";
import { AuthPage } from "./components/AuthPage";
import { PrivacyPolicy } from "./components/PrivacyPolicyPage";


const Wrapper = ({ children }) => {
  const location = useLocation();

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [location.pathname]);

  return children;
};

function HomePage() {
  return (
    <Layout title="FanSubs">
      <Hero />
      <Screen />
      <Cards />
      <ImageText />
      <List />
      <GetStarted />
      <Socials />
    </Layout>
  );
}

function App() {
  return (
    <Router>
      <Wrapper>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/auth" element={<AuthPage />} />
            <Route path="privacy-policy" element={<PrivacyPolicy />} />
          </Routes>
      </Wrapper>
    </Router>
  );
}

export default App;
