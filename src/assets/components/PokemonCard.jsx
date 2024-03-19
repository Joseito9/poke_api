import { Card } from "react-bootstrap";

const PokemonCard = ({ pokemon }) => {
  return (
    <Card key={pokemon.id}>
      <Card.Img
        className="pokemon-img"
        src={pokemon.sprites.other.dream_world.front_default}
        alt={pokemon.name}
      />
      <Card.Body>
        <Card.Title>{pokemon.name}</Card.Title>
        <Card.Text>N°: {pokemon.id}</Card.Text>
        <Card.Text>
          {pokemon.types.map((type) => (
            <span key={type.type.name} className={type.type.name}>
              {" "}
              {type.type.name}
            </span>
          ))}
        </Card.Text>
        {/* <Card.Text>HP: {pokemon.stats[0].base_stat}</Card.Text>
        <Card.Text>Attack: {pokemon.stats[1].base_stat}</Card.Text>
        <Card.Text>Defense: {pokemon.stats[2].base_stat}</Card.Text>
        <Card.Text>Special Attack: {pokemon.stats[3].base_stat}</Card.Text>
        <Card.Text>Special Defense: {pokemon.stats[4].base_stat}</Card.Text>
        <Card.Text>Speed: {pokemon.stats[5].base_stat}</Card.Text> */}
      </Card.Body>
    </Card>
  );
};

export default PokemonCard;
