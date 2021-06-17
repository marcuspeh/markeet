import { Spinner } from "react-bootstrap";

export const Loader = () => {
  return (
    <Spinner animation="border" role="status">
      <span className="sr-only">Loading...</span>
    </Spinner>
  );
};

export default Loader;
