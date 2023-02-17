import { Routes, Route, BrowserRouter } from "react-router-dom";

// Components
import BlockhouseLiquidity from "./components/BlockhouseLiquidity";
import BlockhouseStructured from "./components/BlockhouseStructured";

// CSS
import "./App.css";

function App() {
  return (
    <>
      {/* We have to hide routes because github free hosting did */}
      {/* <BlockhouseLiquidity /> */}
      <BlockhouseStructured />

      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<BlockhouseLiquidity />} />
          <Route path="/BlockhouseStructured" element={<BlockhouseStructured />} />
        </Routes>
      </BrowserRouter> */}
    </>
  );
}

export default App;
