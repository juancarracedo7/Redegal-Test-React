import Details from "./components/Details";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route axact path="/details/:id" element={<Details />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
