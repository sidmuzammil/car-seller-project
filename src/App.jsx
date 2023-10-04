import "./App.css";
import Mainbody from "./Components/Mainbody";
import Nav from "./Components/Nav";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Pagination from "./Components/pagination";

function App() {
  const [search, setSearch] = useState("");
  console.log(search);
  return (
    <div>
      <Nav setSearch={setSearch} />
      <Router>
        <Routes>
        <Route path="/" element={<Mainbody search={search} />} />
          {/* <Route path="/page:1" element={<Mainbody search={search} />} /> */}
        </Routes>
        {/* <Pagination/> */}
      </Router>
    </div>
  );
}

export default App;
