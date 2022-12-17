import { BrowserRouter, Routes, Route } from "react-router-dom";
import AskPage from "./components/AskPage";
import "./App.css";
import JokePage from "./components/JokePage";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:query" element={<AskPage />} />
        <Route path="/j/:query" element={<JokePage />} />
        <Route index element={<AskPage />} />
        <Route path="*" element={<AskPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
