import { Alert } from "../elements/Alert";
import "./Success.css";

function Success() {
  return (
    <div className="success">
      <Alert >
        <p className="success__text">Your order was successful</p>
      </Alert>
    </div>
  );
}

export default Success;
