import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  const [toast, setToast] = useState("");

  const showToast = (message) => {
    setToast(message);
    setTimeout(() => {
      setToast("");
    }, 2000);
  };

  return (
    <>
      <Navbar toast={toast} setToast={showToast} />
      <Home toast={toast} setToast={showToast} />
    </>
  );
}

export default App;
