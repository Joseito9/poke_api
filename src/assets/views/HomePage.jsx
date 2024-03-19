import { useContext } from "react";
import PokemonList from "../components/PokemonList";
import { PokemonContext } from "../context/PokemonContext";

const HomePage = () => {
  const { loadMorePokemons } = useContext(PokemonContext);

  return (
    <div>
      <PokemonList />
      <div className="btn-container">
        <button className="load-more" onClick={loadMorePokemons}>
          Load more...
        </button>
      </div>
    </div>
  );
};

export default HomePage;
