import "bootstrap/dist/css/bootstrap.css";
import { Card, Button } from "react-bootstrap";

function CardComponent(props) {
  const {
    item_name,
    item_brand,
    item_image,
    item_sale_price,
    saleExpiryDate,
    item_category,
    onCheckboxChange,
  } = props;
  return (
    <>
      <Card
        className="p-0 overflow-hidden h-100 shadow"
        id={props.id}
        key={props.id}
      >
        <div className=" overflow-hidden p-0 bg-light">
          <Card.Img variant="top" src={item_image} />
        </div>
        <Card.Body className="text-center">
          <Card.Title className="display-6">${item_sale_price}</Card.Title>
          <Card.Title>
            {" "}
            <input
              type="checkbox"
              name="item"
              value={[item_name, item_brand].join("")}
              onChange={onCheckboxChange}
              //onChange={handleCheckboxChange}
            />
          </Card.Title>
        </Card.Body>
      </Card>
    </>
  );
}
export default CardComponent;
