import { useContext } from "react";
import { PokemonContext } from "../context/PokemonContext";
import PokemonCard from "./PokemonCard";
import Loader from "./Loader";

const PokemonList = () => {
  const { allPokemons, loading } = useContext(PokemonContext);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="container p-3">
          {allPokemons.map((pokemon) => (
            <PokemonCard pokemon={pokemon} key={pokemon.id} />
          ))}
        </div>
      )}
    </>
  );
};

export default PokemonList;
