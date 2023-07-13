import React, { useState } from "react";
import Adding from "../components/Adding";

<<<<<<< Updated upstream
const Home = () => {
  const [count, setCount] = useState(1);

  console.log("count: " + count);
=======
const Home = (props) => {
  // const [count, setCount] = useState(1);
  const dispatch = useDispatch();
  let { data } = useSelector((state) => state.getData);

  const [count, setCount] = useState(0);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setCount((count) => count + 1);
  //   }, 1000);
  // }, [count]); // <- add empty brackets here

  // data = data.slice(89, 96); //This method returns a new array with specified start to end elements.

  // data = data.filter((element) => element.id > 90); //This method creates a new array with only elements that passes the condition inside the provided function.

  // data = (data || []).map((element, index) => {
  //   return {
  //     indexProp: index,
  //     id: element.id,
  //     userId: element.userId,
  //     name: "Avaz",
  //   };
  // });
  console.log("data", data);

  useEffect(() => {
    const test = async () => {
      let res = await fetchTest();
      dispatch(putData(res.data));
    };
    test();
  }, []);
  // if (!data) return; // !data o'zgarsa komponent doim qayta render bo'ladi
  // data = data.map((element, index) => {
  //   return {
  //     ...element,
  //     name: "Avaz",
  //   };
  // });

  // ternary operator  |  conditionlal rendering

  console.log(
    "reduce",
    data.reduce((total, current) => total + current.id),
  );

  const [nameHendler, setNameHendler] = useState("");

  const changeName = () => {
    props.setDevName(nameHendler);
  };
>>>>>>> Stashed changes
  return (
    <>
      <main>
        <section className="wu-main-section">
          <div className="container">
            <div className="wu-main-btns">
              <a href="./local.html" className="wu-main-btn">
                Local
              </a>
              <Adding sardor="Sardor Ismoilov" setCount={setCount} />
              <a href="#" className="wu-main-btn">
                Ijro
              </a>
              <h1>{props.developer}</h1>
              <h1>{props.developer2}</h1>
              <input
                type="text"
                onChange={(e) => setNameHendler(e.target.value)}
              />
              <button onClick={changeName}>change Name</button>
            </div>
<<<<<<< Updated upstream
=======
            {/* <div>
              {data ? (
                data.map((x, idx) => {
                  return (
                    <div key={"test-index-" + idx}>
                      userID {x.id} <br />
                      title {x.title}
                    </div>
                  );
                })
              ) : (
                <div>nothiong found</div>
              )}
            </div> */}
            <h1>I've rendered {count} times!</h1>;
>>>>>>> Stashed changes
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
