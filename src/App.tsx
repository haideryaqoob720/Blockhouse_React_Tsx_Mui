import { Routes, Route, BrowserRouter } from "react-router-dom";

// Components
import LandingPage from "./components/LandingPage";
import BlockhouseLiquidity from "./components/BlockhouseLiquidity";
import BlockhouseStructured from "./components/BlockhouseStructured";
import BlockhouseHome from "./components/BlockhouseHome";
import BorrowPage from "./components/BorrowPage";
import CommingSoon from "./components/CommingSoon";
import ThankYou from "./components/ThankYou";

// CSS
import "./App.css";

function App() {
  return (
    <>
      {/* We have to hide routes because github free hosting did */}
      {/* <BlockhouseLiquidity /> */}
      {/* <BlockhouseStructured /> */}
      {/* <LandingPage /> */}
      <BlockhouseHome />

      {/* <BrowserRouter>
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
          <Route
            path="/BlockhouseHome"
            element={<BlockhouseHome />}
          />
          <Route path="/BorrowPage" element={<BorrowPage />} />
          <Route path="/CommingSoon" element={<CommingSoon />} />
          <Route path="/ThankYou" element={<ThankYou />} />
        </Routes>
      </BrowserRouter> */}
    </>
  );
}

export default App;
