import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <img
        className="home_image"
        alt=""
        src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg"
      />
      {/*product id, title,price,rating,image*/}
      <Product
        id="12321341"
        title="the learn Startup: how Constant Innovation Creates"
        price={50}
        rating={5}
        image="https://images-na.ssl-images-amazon.com/images/I/61S7BrCBj7L._SX466_.jpg"
      />
      {/*product*/}
    </div>
  );
}

export default Home;
