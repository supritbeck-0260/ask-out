import { BrowserRouter, Routes, Route } from "react-router-dom";
import AskPage from "./components/AskPage";
import "./App.css";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:query" element={<AskPage />} />
        <Route index element={<AskPage />} />
        <Route path="*" element={<AskPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
