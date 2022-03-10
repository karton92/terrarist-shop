import { useState } from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

function App() {
  const [section, setSection] = useState("shop");
  const [isActive, setActive] = useState(false);
  return (
    <div className="container">
      <Header
        section={section}
        setSection={setSection}
        isActive={isActive}
        setActive={setActive}
      />
      <Main section={section} isActive={isActive} />
      <Footer />
    </div>
  );
}

export default App;
