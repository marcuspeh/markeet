import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { checkout } from "./../../actions/cartActions";

const Checkout = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <Button
        variant="success"
        style={{
          height: "auto",
          width: "auto",
          padding: "auto",
          marginLeft: "1vw",
          marginTop: "1vh",
          fontSize: "1.4vw",
        }}
        onClick={() => dispatch(checkout())}
      >
        Checkout
      </Button>
    </div>
  );
};

export default Checkout;
