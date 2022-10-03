import { ReactElement } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, Quiz, QuizConfiguration } from "./pages";
import { Spots } from "./components";

function App(): ReactElement {
  return (
    <BrowserRouter>
      <div className="app">
        <Spots />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/configuration" element={<QuizConfiguration />} />
          <Route path="/quiz" element={<Quiz />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
