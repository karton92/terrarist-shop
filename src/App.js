import { useState } from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

function App() {
  const [section, setSection] = useState("shop");
  return (
    <div className="container">
      <Header setSection={setSection} />
      <Main section={section} />
      <Footer />
    </div>
  );
}

export default App;
