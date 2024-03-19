import { Spinner } from "react-bootstrap";

const Loader = () => {
  return (
    <>
      <div className="loading-container">
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
      </div>
    </>
  );
};

export default Loader;
