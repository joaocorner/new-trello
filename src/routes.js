import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import App from "./App";

function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/todolist" element={<App />} />
        <Route path="*" element={<App />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesApp;