import React, { useEffect, useState } from "react";
import Adding from "../components/Adding";
import { fetchTest } from "../api/test";
// import { useDispatch } from "@reduxjs/toolkit";
import { putData } from "../store/slices/getDataSlice";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const [count, setCount] = useState(1);
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.getData);
  console.log("data", data);
  useEffect(() => {
    const test = async () => {
      let res = await fetchTest();
      dispatch(putData(res.data));
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
            <div>
              {data.map((x, idx) => {
                return (
                  <div key={"test-index-" + idx}>
                    userID {x.id} <br />
                    title {x.title}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
