import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout/Layout";
import Crabada from "./pages/Crabada/Crabada";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Crabada />} />
          <Route path="*" element={<Crabada />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
