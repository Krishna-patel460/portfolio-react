import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Education from "./Components/Education/Education";
import Projects from "./Components/Projects/Projects";
import Footer from "./Components/Footer/Footer";
import Skill from "./Components/Skill/Skill";

function App() {
  return (
    <div className="bg-[#FFF0F6] h-auto w-full overflow-hidden">
      <Navbar />
      <Home />
      <About />
      <Education />
      <Skill />
      <Projects />
      <Footer />

    </div>
  );
}

export default App;

