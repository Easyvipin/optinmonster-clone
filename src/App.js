import "./styles/index.scss";
import Header from "./Component/Header";
import Banner from "./Component/Banner";
import Pricing from "./Component/Pricing";
import Extras from "./Component/Extras";
import Reviews from "./Component/Reviews";
import Footer from "./Component/Footer";
import { Faqs } from "./Component/Faqs";
function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Pricing />
      <Extras />
      <Reviews />
      <Faqs />
      <Footer />
    </div>
  );
}

export default App;
