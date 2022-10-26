import "./app/styled";
import "./App.css";
import { Box, LightBox } from "./app/styled";
import Hijo from "./components/Hijo";

import React from "react";

const people = [
  // SE PUEDE DEFINIR FUERA DE APP PQ NO DEPENDE DE REACT, SON DATOS ESTATICOS
  {
    name: "Juan",
    age: 29,
  },
  {
    name: "Manolita",
    age: 68,
  },
];

const App = () => {
  const hacerCosas = () => {
    alert("hacer Cosas");
  };

  return (
    <div className="App">
      <Box onClick={hacerCosas} valor={false}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis quaerat
        suscipit accusantium laudantium laborum alias! Maiores hic ea
        necessitatibus id iste! Suscipit maxime doloremque labore possimus
        delectus error tempore quidem!
      </Box>
      <LightBox>
        <Hijo datos={people} />
      </LightBox>
    </div>
  );
};

export default App;
