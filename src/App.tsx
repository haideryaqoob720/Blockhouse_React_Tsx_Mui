import { Routes, Route, BrowserRouter } from "react-router-dom";

// Components
import LandingPage from "./components/LandingPage";
import BlockhouseLiquidity from "./components/BlockhouseLiquidity";
import BlockhouseStructured from "./components/BlockhouseStructured";
import BorrowPage from "./components/BorrowPage";
import CommingSoon from "./components/CommingSoon";

// CSS
import "./App.css";

function App() {
  return (
    <>
      {/* We have to hide routes because github free hosting did */}
      {/* <BlockhouseLiquidity /> */}
      {/* <BlockhouseStructured /> */}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route
            path="/BlockhouseLiquidity"
            element={<BlockhouseLiquidity />}
          />
          <Route
            path="/BlockhouseStructured"
            element={<BlockhouseStructured />}
          />
          <Route path="/BorrowPage" element={<BorrowPage />} />
          <Route path="/CommingSoon" element={<CommingSoon />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;