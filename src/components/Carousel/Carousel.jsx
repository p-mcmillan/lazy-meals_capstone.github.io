//import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
//import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "bootstrap/dist/css/bootstrap.css";
import Card from "../Cards/Card";
import RecipeGeneratorAPI from "../../api/api";
import "../../styles/DavieStreet.scss";

// try arrow

const Carousel = (props) => {
  // const [selectedItems, setSelectedItems] = useState([]);
  //const price;

  let selectedItems = [];

  function handleCheckboxChange(event) {
    const { value, checked } = event.target;
    if (checked) {
      // setSelectedItems((prevSelectedItems) => [...prevSelectedItems, value]);
      selectedItems = selectedItems.filter((item) => item !== value);

      // selectedItems.push(value);
    } else {
      // setSelectedItems((prevSelectedItems) =>
      //   prevSelectedItems.filter((item) => item !== value)

      // );
      selectedItems.push(value);
      selectedItems = selectedItems.filter((item) => item !== value);
    }
  }

  function handleCreateRecipeSubmit(event) {
    event.preventDefault();
    if (selectedItems.length === 0) {
      alert("Please select an item");
      return;
    }
    console.log("Selected items:", selectedItems);
    /// now use setstate to send the array to meet its friend API
    // Perform further processing or pass the selected items to another component/function
    event.target.reset();
  }

  return (
    <>
      <form onSubmit={handleCreateRecipeSubmit}>
        <div className=" container py-4 px-4 justify-center">
          <h1 className="category-header">Meat</h1>
          <Swiper
            freeMode={true}
            grabCursor={true}
            //modules={[Autoplay, Pagination, Navigation]}
            modules={[FreeMode]}
            className="mySwiper"
            slidesPerView={6}
            spaceBetween={30}
          >
            {props.davieData
              .filter((content) => content.item_category === "meat")
              .map((content) => (
                <SwiperSlide key={content.id}>
                  <Card
                    key={content.id}
                    id={content.id}
                    item_category={content.item_category}
                    item_brand={content.item_brand}
                    item_sale_price={content.item_sale_price}
                    item_name={content.item_name}
                    saleExpiryDate={content.saleExpiryDate}
                    item_image={content.item_image}
                    onCheckboxChange={handleCheckboxChange}
                  />
                </SwiperSlide>
              ))}
          </Swiper>

          <h1 className="category-header">Fish & Seafood</h1>
          <Swiper
            freeMode={true}
            grabCursor={true}
            modules={[FreeMode]}
            className="mySwiper"
            slidesPerView={6}
            spaceBetween={30}
            // spaceBetween={30}
          >
            {props.davieData
              .filter(
                (content) =>
                  content.item_category === "fishSeafood" &&
                  content.item_image !== null
              )
              .map((content) => (
                <SwiperSlide key={content.id}>
                  <Card
                    key={content.id}
                    id={content.id}
                    item_category={content.itegm_category}
                    item_brand={content.item_brand}
                    item_sale_price={content.item_sale_price}
                    item_name={content.item_name}
                    saleExpiryDate={content.saleExpiryDate}
                    item_image={content.item_image}
                    onCheckboxChange={handleCheckboxChange}
                  />
                </SwiperSlide>
              ))}
          </Swiper>

          <h1 className="category-header">Fruits & Vegetables</h1>
          <Swiper
            freeMode={true}
            grabCursor={true}
            modules={[FreeMode]}
            className="mySwiper"
            slidesPerView={6}
            spaceBetween={30}
          >
            {props.davieData
              .filter(
                (content) =>
                  content.item_category === "fruitsVegtables" &&
                  content.item_image !== null
              )
              .map((content) => (
                <SwiperSlide key={content.id}>
                  <Card
                    key={content.id}
                    id={content.id}
                    item_category={content.itegm_category}
                    item_brand={content.item_brand}
                    item_sale_price={content.item_sale_price}
                    item_name={content.item_name}
                    saleExpiryDate={content.saleExpiryDate}
                    item_image={content.item_image}
                    onCheckboxChange={handleCheckboxChange}
                  />
                </SwiperSlide>
              ))}
          </Swiper>
          <h1 className="category-header">Deli</h1>
          <Swiper
            freeMode={true}
            grabCursor={true}
            modules={[FreeMode]}
            className="mySwiper"
            slidesPerView={6}
            spaceBetween={30}
          >
            {props.davieData
              .filter(
                (content) =>
                  content.item_category === "deli" &&
                  content.item_image !== null
              )
              .map((content) => (
                <SwiperSlide key={content.id}>
                  <Card
                    key={content.id}
                    id={content.id}
                    item_category={content.itegm_category}
                    item_brand={content.item_brand}
                    item_sale_price={content.item_sale_price}
                    item_name={content.item_name}
                    saleExpiryDate={content.saleExpiryDate}
                    item_image={content.item_image}
                    onCheckboxChange={handleCheckboxChange}
                  />
                </SwiperSlide>
              ))}
          </Swiper>

          <h1 className="category-header">Bakery</h1>
          <Swiper
            freeMode={true}
            grabCursor={true}
            modules={[FreeMode]}
            className="mySwiper"
            slidesPerView={6}
            spaceBetween={30}
          >
            {props.davieData
              .filter(
                (content) =>
                  content.item_category === "bakery" &&
                  content.item_image !== null
              )
              .map((content) => (
                <SwiperSlide key={content.id}>
                  <Card
                    key={content.id}
                    id={content.id}
                    item_category={content.itegm_category}
                    item_brand={content.item_brand}
                    item_sale_price={content.item_sale_price}
                    item_name={content.item_name}
                    saleExpiryDate={content.saleExpiryDate}
                    item_image={content.item_image}
                    onCheckboxChange={handleCheckboxChange}
                  />
                </SwiperSlide>
              ))}
          </Swiper>
          <h1 className="category-header">Dairy & Eggs</h1>
          <Swiper
            freeMode={true}
            grabCursor={true}
            modules={[FreeMode]}
            className="mySwiper"
            slidesPerView={6}
            spaceBetween={30}
          >
            {props.davieData
              .filter(
                (content) =>
                  content.item_category === "DairyEggs" &&
                  content.item_image !== null
              )
              .map((content) => (
                <SwiperSlide key={content.id}>
                  <Card
                    key={content.id}
                    id={content.id}
                    item_category={content.itegm_category}
                    item_brand={content.item_brand}
                    item_sale_price={content.item_sale_price}
                    item_name={content.item_name}
                    saleExpiryDate={content.saleExpiryDate}
                    item_image={content.item_image}
                    onCheckboxChange={handleCheckboxChange}
                  />
                </SwiperSlide>
              ))}
          </Swiper>
          <h1 className="category-header">Drinks</h1>
          <Swiper
            freeMode={true}
            grabCursor={true}
            modules={[FreeMode]}
            className="mySwiper"
            slidesPerView={6}
            spaceBetween={30}
          >
            {props.davieData
              .filter(
                (content) =>
                  content.item_category === "drinks" &&
                  content.item_image !== null
              )
              .map((content) => (
                <SwiperSlide key={content.id}>
                  <Card
                    key={content.id}
                    id={content.id}
                    item_category={content.itegm_category}
                    item_brand={content.item_brand}
                    item_sale_price={content.item_sale_price}
                    item_name={content.item_name}
                    saleExpiryDate={content.saleExpiryDate}
                    item_image={content.item_image}
                    onCheckboxChange={handleCheckboxChange}
                  />
                </SwiperSlide>
              ))}
          </Swiper>
          <h1 className="category-header">Frozen</h1>
          <Swiper
            freeMode={true}
            grabCursor={true}
            modules={[FreeMode]}
            className="mySwiper"
            slidesPerView={6}
            spaceBetween={30}
          >
            {props.davieData
              .filter(
                (content) =>
                  content.item_category === "frozen" &&
                  content.item_image !== null
              )
              .map((content) => (
                <SwiperSlide key={content.id}>
                  <Card
                    key={content.id}
                    id={content.id}
                    item_category={content.itegm_category}
                    item_brand={content.item_brand}
                    item_sale_price={content.item_sale_price}
                    item_name={content.item_name}
                    saleExpiryDate={content.saleExpiryDate}
                    item_image={content.item_image}
                    onCheckboxChange={handleCheckboxChange}
                  />
                </SwiperSlide>
              ))}
          </Swiper>
          <h1 className="category-header">Pantry</h1>
          <Swiper
            freeMode={true}
            grabCursor={true}
            modules={[FreeMode]}
            className="mySwiper"
            slidesPerView={6}
            spaceBetween={30}
          >
            {props.davieData
              .filter(
                (content) =>
                  content.item_category === "pantry" &&
                  content.item_image !== null
              )
              .map((content) => (
                <SwiperSlide key={content.id}>
                  <Card
                    key={content.id}
                    id={content.id}
                    item_category={content.itegm_category}
                    item_brand={content.item_brand}
                    item_sale_price={content.item_sale_price}
                    item_name={content.item_name}
                    saleExpiryDate={content.saleExpiryDate}
                    item_image={content.item_image}
                    onCheckboxChange={handleCheckboxChange}
                  />
                </SwiperSlide>
              ))}
          </Swiper>
          <h1 className="category-header">Snacks, Chips & Candy</h1>
          <Swiper
            freeMode={true}
            grabCursor={true}
            modules={[FreeMode]}
            className="mySwiper"
            slidesPerView={6}
            spaceBetween={30}
            // spaceBetween={30}
            // centeredSlides={true}
            // autoplay={{
            //   delay: 2500,
            //   // reverseDirection: true,

            //   disableOnInteraction: false,
            // }}
            // pagination={{
            //   clickable: true,
            // }}
            // navigation={true}
            // modules={[Autoplay, Pagination, Navigation]}
            // className="mySwiper"
            // // freeMode={true}
            // grabCursor={true}
            // // modules={[FreeMode]}
            // // className="mySwiper"
            // slidesPerView={6}
            // // spaceBetween={30}
          >
            {props.davieData
              .filter(
                (content) =>
                  content.item_category === "snaksChipsCandy" &&
                  content.item_image !== null
              )
              .map((content) => (
                <SwiperSlide key={content.id}>
                  <Card
                    key={content.id}
                    id={content.id}
                    item_category={content.itegm_category}
                    item_brand={content.item_brand}
                    item_sale_price={content.item_sale_price}
                    item_name={content.item_name}
                    saleExpiryDate={content.saleExpiryDate}
                    item_image={content.item_image}
                    onCheckboxChange={handleCheckboxChange}
                  />
                </SwiperSlide>
              ))}
          </Swiper>
          <h1 className="category-header">International Foods</h1>
          <Swiper
            freeMode={true}
            grabCursor={true}
            modules={[FreeMode]}
            className="mySwiper"
            slidesPerView={6}
            spaceBetween={30}
          >
            {props.davieData
              .filter(
                (content) =>
                  content.item_category === "internationalFoods" &&
                  content.item_image !== null
              )
              .map((content) => (
                <SwiperSlide key={content.id}>
                  <Card
                    key={content.id}
                    id={content.id}
                    item_category={content.itegm_category}
                    item_brand={content.item_brand}
                    item_sale_price={content.item_sale_price}
                    item_name={content.item_name}
                    saleExpiryDate={content.saleExpiryDate}
                    item_image={content.item_image}
                    onCheckboxChange={handleCheckboxChange}
                  />
                </SwiperSlide>
              ))}
          </Swiper>
          <RecipeGeneratorAPI
            selectedItems={selectedItems}
            // setSelectedItems={setSelectedItems}
          />
        </div>
      </form>
    </>
  );
};

export default Carousel;
