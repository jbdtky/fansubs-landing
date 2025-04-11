import {Layout} from "./components/Layout"
import { Cards } from "./components/sections/Cards";
import { Hero } from "./components/sections/Hero";
import { Screen } from "./components/sections/Screen";
import { ImageText } from "./components/sections/ImageText";
import { List } from "./components/sections/List";
import { GetStarted } from "./components/sections/GetStarted";
import { Socials } from "./components/sections/Socials";

function App() {

  return  (
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

export default App;
