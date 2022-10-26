import React from "react";

const Hijo = ({ datos }) => {
  return (
    <div>
      <h1>Hijo</h1>

      {datos.map((people) => (
        <div>
          <h2>{people.name}</h2>
          <h3>{people.age}</h3>
        </div>
      ))}
    </div>
  );
};
/* 
const Hijo = (prop) => {
  return (
    <div>
      <h1>Hijo</h1>

      {prop.datos.map((people) => (
        <div>
          <h2>{people.name}</h2>
          <h3>{people.age}</h3>
        </div>
      ))}
    </div>
  );
}; */
export default Hijo;
