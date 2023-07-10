import React from 'react'

const Adding = ({ setCount }) => {
  return <button onClick={() => setCount((x) => x + 2)}>add</button>;
};

export default Adding