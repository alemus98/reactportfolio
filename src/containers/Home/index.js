import "./App.css";
import { useState } from "react";
import Mode from "../../components/Mode/Mode";
import Header from "../../components/Header/Header";
import { About } from "../../components/About/About";
import { Footer } from "../../components/Footer/Footer";
import Project from "../../components/Project/Project";

function Home() {
  const [whiteMode, setQuietMode] = useState(false);

  const handleModeChange = () => {
    setQuietMode(!whiteMode);
  };

  return (
    <div className={whiteMode ? "white-mode" : "dark-mode"}>
      <Mode  />
      <Header />
      <About />
   
      <Project />
      <Footer />
    </div>
  );
}

export default Home;
