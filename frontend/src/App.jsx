import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import About from "./Pages/About";
import Project from "./Pages/Project";
import Home from "./Pages/Home";
import SignIn from "./Pages/SignIn";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
          <Route path="/sign-In" element={<SignIn />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
