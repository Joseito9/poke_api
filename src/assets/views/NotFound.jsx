import giphy from "../img/giphy.gif";

const NotFound = () => {
  return (
    <>
      <h1>Oops! Parece que estas perdido.😱</h1>
      <p>Favor usa alguna de las rutas que podras ver mas arriba</p>
      <img src={giphy} alt="crying-pikachu" />
    </>
  );
};

export default NotFound;
