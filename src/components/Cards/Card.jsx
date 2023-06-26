//import "bootstrap/dist/css/bootstrap.css";
import { Card, Button, Tooltip } from "react-bootstrap";
import "../../styles/Card.scss";
import LazyLoad from "react-lazy-load";

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

  //tooltip for cards displaying item name
  var tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"] tt')
  );
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    // return new bootstrap.Tooltip(tooltipTriggerEl);
  });
  return (
    <>
      <Card
        className="custom-card"
        data-bs-toggle="tooltip"
        data-bs-placement="top"
        title={item_name}
        //className="p-0 overflow-hidden h-100 shadow tt"
        id={props.id}
        key={props.id}
      >
        <div>
          <LazyLoad height={150} offset={50}>
            <Card.Img variant="top" src={item_image} />
          </LazyLoad>
        </div>

        <Card.Body className="text-center">
          <Card.Title className="display-8">${item_sale_price}</Card.Title>
          <Card.Title>
            {" "}
            <input
              type="checkbox"
              className="custom-checkbox "
              name="item"
              price={item_sale_price}
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
