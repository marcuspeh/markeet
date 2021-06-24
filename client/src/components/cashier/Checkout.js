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
          height: "10vh",
          width: "9vw",
          paddingBottom: "1vh",
          textAlign: "center",
          verticalAlign: "middle",
          marginLeft: "1vw",
          marginTop: "0.7vw",
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
