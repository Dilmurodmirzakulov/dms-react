import React, { useState } from "react";
import MobileTabs from "../components/MobileTabs";
import Header from "../components/Header";
import Adding from "../components/Adding";

const Home = () => {
  const [count, setCount] = useState(1);

  console.log("count: " + count);
  return (
    <>
      <Header />
      <main>
        <section class="wu-main-section">
          <div class="container">
            <div class="wu-main-btns">
              <a href="./local.html" class="wu-main-btn">
                Local
              </a>
              <Adding setCount={setCount} />
              <a href="#" class="wu-main-btn">
                Ijro
              </a>
            </div>
          </div>
        </section>
      </main>
      <MobileTabs />
    </>
  );
};

export default Home;
