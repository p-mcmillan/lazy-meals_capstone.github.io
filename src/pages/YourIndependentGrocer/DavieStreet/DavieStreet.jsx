import Carousel from "../../../components/Carousel/Carousel";

function DavieStreet(props) {
  return (
    <>
      <h1>Hi</h1>
      <Carousel davieData={props.davieData} />
      {/* <MeatCarousel davieData={props.davieData} /> */}
      <h1>Bye</h1>
    </>
  );
}

export default DavieStreet;
