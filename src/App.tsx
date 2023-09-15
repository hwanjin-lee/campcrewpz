// import { ReactDOM } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Test from "./pages/Test";
import "./App.css";

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route index element={<Home />} />
          <Route path="test" element={<Test />} />
          <Route />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
