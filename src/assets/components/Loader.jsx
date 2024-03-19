import { Spinner } from "react-bootstrap";

const Loader = () => {
  return (
    <>
      <Spinner
        className="loading"
        variant="danger"
        size="sm"
        animation="grow"
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </Spinner>
      <Spinner
        className="loading"
        variant="danger"
        size="sm"
        animation="grow"
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </Spinner>
      <Spinner
        className="loading"
        variant="danger"
        size="sm"
        animation="grow"
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </>
  );
};

export default Loader;
