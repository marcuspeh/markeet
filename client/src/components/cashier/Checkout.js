import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { checkout } from "./../../actions/cartActions";

const Checkout = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <Button variant="primary" onClick={() => dispatch(checkout())}>
        Checkout
      </Button>
    </div>
  );
};

export default Checkout;
