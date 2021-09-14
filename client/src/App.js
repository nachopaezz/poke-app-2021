import React from "react";
import NavBar from "./components/NavBar/NavBar"
import {Inicio}  from "./components/Welcome/Welcome";
import { Route} from "react-router-dom";
import Home from "./components/Home/Home";
import { CreatePokemon } from "./components/CreatePokemon/CreatePokemon";
import { PokemonDetail } from "./components/PokemonDetail/PokemonDetail";

function App() {
  return (
      <React.Fragment>
          <Route exact path="/" component={Inicio} />
          <Route path="/Home" component={NavBar} />
          <Route exact path="/Home" component={Home} />
          <Route path="/Home/Add" component={CreatePokemon} />
          <Route path="/Home/data/:id" component={PokemonDetail} />
      </React.Fragment>
  );
}

export default App;