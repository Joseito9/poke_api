import { createContext, useEffect, useState } from "react";

export const PokemonContext = createContext();

const PokemonProvider = ({ children }) => {
  const [offset, setOffset] = useState(0);
  const [allPokemons, setAllPokemons] = useState([]);
  //   const [globalPokemons, setGlobalPokemons] = useState([]);
  const [loading, setLoading] = useState(true);

  const getPokemons = async (limit = 30) => {
    const baseUrl = "https://pokeapi.co/api/v2/";
    const res = await fetch(
      `${baseUrl}pokemon?limit=${limit}&offset=${offset}`
    );
    const data = await res.json();
    const promises = data.results.map(async (pokemon) => {
      const res = await fetch(pokemon.url);
      const data = await res.json();
      return data;
    });
    const results = await Promise.all(promises);
    setAllPokemons([...allPokemons, ...results]);
    setLoading(false);
  };

  useEffect(() => {
    getPokemons();
  }, [offset]);

  const loadMorePokemons = () => {
    setOffset(offset + 30);
  };

  return (
    <PokemonContext.Provider
      value={{
        allPokemons,
        loadMorePokemons,
        loading,
        setLoading,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

export default PokemonProvider;
