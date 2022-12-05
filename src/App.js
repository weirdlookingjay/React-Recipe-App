import ChefSection from "./components/ChefSection";
import HeroSection from "./components/HeroSection";
import ImproveSkills from "./components/ImproveSkills";
import Navbar from "./components/Navbar";
import QuoteSection from "./components/QuoteSection";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container main">
        <HeroSection />
        <ImproveSkills />
        <QuoteSection />
        <ChefSection />
      </div>
    </div>
  );
}

export default App;
