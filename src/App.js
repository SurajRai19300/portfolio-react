import "./App.css";
import { useState, useEffect } from "react";

import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import Header from "./Components/Header/Header";
import Nav from "./Components/Nav/Nav";
import About from "./Components/About/About";
import Portfolio from "./Components/Portfolio/Portfolio";
import Contact from "./Components/Contact/Contact";
import Skills from "./Components/Skills/Skills";
import Footer from "./Components/Footer/Footer";

function App() {
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <div className="cont">
      {isLoading ? (
        <ClimbingBoxLoader
          size={20}
          color={"#36D7B7"}
          loading="true"
          style={{}}
        />
      ) : (
        <div>
          <div>
            <Header />
          </div>

          <div>
            <Nav />
          </div>

          <div>
            <About />
          </div>

          <div>
            <Skills />
          </div>

          <div>
            <Portfolio />
          </div>

          <div>
            <Contact />
          </div>

          <div>
            <Footer />
          </div>
        </div>
      )}
    </div>
  );
}


export default App;
