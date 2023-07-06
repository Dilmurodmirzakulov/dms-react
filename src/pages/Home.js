import React from "react";
import MobileTabs from "../components/MobileTabs";
import Header from "../components/Header";

const Home = () => {
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
