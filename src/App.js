import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./Pages/Landing";
import Nav from "./components/Nav";
import "./index.css";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route index element={<Landing />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
