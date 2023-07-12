import React, { useEffect, useState } from "react";
import Adding from "../components/Adding";
import { fetchTest } from "../api/test";

const Home = () => {
  const [count, setCount] = useState(1);
  useEffect(() => {
    const test = async () => {
      let res = await fetchTest();
      console.log("res", res)
    };
    test();
  }, []);
  return (
    <>
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
    </>
  );
};

export default Home;
