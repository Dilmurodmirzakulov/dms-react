import Layout from "./layout/layout";
import Home from "./pages/Home";
import Signature from "./pages/Signature";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signature" element={<Signature />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
