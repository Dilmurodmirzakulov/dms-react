import { useState } from "react";
import Layout from "./layout/layout";
import Home from "./pages/Home";
import Signature from "./pages/Signature";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  let name = "Abdujalil"
  const [devName, setDevName] = useState("Jasur")
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                setDevName={setDevName}
                developer2={name}
                developer={devName}
              />
            }
          />
          <Route path="/signature" element={<Signature />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
