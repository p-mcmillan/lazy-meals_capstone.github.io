import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "bootstrap/dist/css/bootstrap.css";
import Card from "../Cards/Card";
import RecipeGeneratorAPI from "../../api/api";

// try arrow

const Carousel = (props) => {
  const [selectedItems, setSelectedItems] = useState([]);

  function handleCheckboxChange(event) {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedItems((prevSelectedItems) => [...prevSelectedItems, value]);
    } else {
      setSelectedItems((prevSelectedItems) =>
        prevSelectedItems.filter((item) => item !== value)
      );
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
          <h1>MEAT</h1>
          <Swiper
            freeMode={true}
            grabCursor={true}
            modules={[FreeMode]}
            className="mySwiper"
            slidesPerView={6}
            spaceBetween={30}
          >
            {props.davieData
              .filter((content) => content.item_category === "meat")
              .map((content) => (
                <SwiperSlide>
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

          <h1>Fish & Seafood</h1>
          {/* <Swiper
            freeMode={true}
            grabCursor={true}
            modules={[FreeMode]}
            className="mySwiper"
            slidesPerView={6}
            spaceBetween={30}
          >
            {props.davieData
              .filter((content) => content.item_category === "meat")
              .map((content) => (
                <SwiperSlide>
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
          </Swiper> */}

          <h1>Fruits & Vegetables</h1>
          {/* <Swiper
            freeMode={true}
            grabCursor={true}
            modules={[FreeMode]}
            className="mySwiper"
            slidesPerView={6}
            spaceBetween={30}
          >
            {props.davieData
              .filter((content) => content.item_category === "meat")
              .map((content) => (
                <SwiperSlide>
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
          </Swiper> */}
          <h1>Deli</h1>
          {/* <Swiper
            freeMode={true}
            grabCursor={true}
            modules={[FreeMode]}
            className="mySwiper"
            slidesPerView={6}
            spaceBetween={30}
          >
            {props.davieData
              .filter((content) => content.item_category === "meat")
              .map((content) => (
                <SwiperSlide>
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
          </Swiper> */}

          <h1>Bakery</h1>
          <Swiper
            freeMode={true}
            grabCursor={true}
            modules={[FreeMode]}
            className="mySwiper"
            slidesPerView={6}
            spaceBetween={30}
          >
            {props.davieData
              .filter((content) => content.item_category === "bakery")
              .map((content) => (
                <SwiperSlide>
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
          <h1>Dairy & Eggs</h1>
          <Swiper
            freeMode={true}
            grabCursor={true}
            modules={[FreeMode]}
            className="mySwiper"
            slidesPerView={6}
            spaceBetween={30}
          >
            {props.davieData
              .filter((content) => content.item_category === "DairyEggs")
              .map((content) => (
                <SwiperSlide>
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
          <h1>Drinks</h1>
          {/* <Swiper
            freeMode={true}
            grabCursor={true}
            modules={[FreeMode]}
            className="mySwiper"
            slidesPerView={6}
            spaceBetween={30}
          >
            {props.davieData
              .filter((content) => content.item_category === "meat")
              .map((content) => (
                <SwiperSlide>
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
          </Swiper> */}
          <h1>Frozen</h1>
          {/* <Swiper
            freeMode={true}
            grabCursor={true}
            modules={[FreeMode]}
            className="mySwiper"
            slidesPerView={6}
            spaceBetween={30}
          >
            {props.davieData
              .filter((content) => content.item_category === "meat")
              .map((content) => (
                <SwiperSlide>
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
          </Swiper> */}
          <h1>Pantry</h1>
          {/* <Swiper
            freeMode={true}
            grabCursor={true}
            modules={[FreeMode]}
            className="mySwiper"
            slidesPerView={6}
            spaceBetween={30}
          >
            {props.davieData
              .filter((content) => content.item_category === "meat")
              .map((content) => (
                <SwiperSlide>
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
          </Swiper> */}
          <h1>Snacks, Chips & Candy</h1>
          {/* <Swiper
            freeMode={true}
            grabCursor={true}
            modules={[FreeMode]}
            className="mySwiper"
            slidesPerView={6}
            spaceBetween={30}
          >
            {props.davieData
              .filter((content) => content.item_category === "meat")
              .map((content) => (
                <SwiperSlide>
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
          </Swiper> */}
          <h1>International Foods</h1>
          {/* <Swiper
            freeMode={true}
            grabCursor={true}
            modules={[FreeMode]}
            className="mySwiper"
            slidesPerView={6}
            spaceBetween={30}
          >
            {props.davieData
              .filter((content) => content.item_category === "meat")
              .map((content) => (
                <SwiperSlide>
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
          </Swiper> */}
          <RecipeGeneratorAPI
            selectedItems={selectedItems}
            setSelectedItems={setSelectedItems}
          />
        </div>
      </form>
    </>
  );
};

export default Carousel;
