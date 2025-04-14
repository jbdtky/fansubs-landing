import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout"
import { Cards } from "./components/sections/Cards";
import { Hero } from "./components/sections/Hero";
import { Screen } from "./components/sections/Screen";
import { ImageText } from "./components/sections/ImageText";
import { List } from "./components/sections/List";
import { GetStarted } from "./components/sections/GetStarted";
import { Socials } from "./components/sections/Socials";
import { AuthPage } from "./components/AuthPage";

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
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<AuthPage />} />
      </Routes>
    </Router>
  );
}

export default App;
