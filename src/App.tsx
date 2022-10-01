import React, { ReactElement } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, Quiz } from "./pages";
 
function App(): ReactElement {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz" element={<Quiz />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
