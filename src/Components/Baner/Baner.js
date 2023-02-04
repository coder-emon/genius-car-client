import React from "react";
import img1 from "../../assets/images/banner/1.jpg";
import img2 from "../../assets/images/banner/2.jpg";
import img3 from "../../assets/images/banner/3.jpg";
import img4 from "../../assets/images/banner/4.jpg";
import img5 from "../../assets/images/banner/5.jpg";
import img6 from "../../assets/images/banner/6.jpg";
import "./Baner.css";
import BanerItem from "./BanerItem";
const Baner = () => {
  const bannerData = [
    {
      image: img1,
      prev: 6,
      id: 1,
      next: 2,
    },
    {
      image: img2,
      prev: 1,
      id: 2,
      next: 3,
    },
    {
      image: img3,
      prev: 2,
      id: 3,
      next: 4,
    },
    {
      image: img4,
      prev: 3,
      id: 4,
      next: 5,
    },
    {
      image: img5,
      prev: 4,
      id: 5,
      next: 6,
    },
    {
      image: img6,
      prev: 5,
      id: 6,
      next: 1,
    },
  ];
  return (
    <div>
      <div className="carousel w-4/5 mx-auto rounded  h-[550px] overflow-hidden ">
        {bannerData?.map((slide) => (
          <BanerItem key={slide.id} slide={slide}></BanerItem>
        ))}
        {/* <BanerItem image={img1}></BanerItem> */}
        {/* <div
          id="slide1"
          className="carousel-item relative w-full scroll-mt-12 "
        >
          <div className="img-gradient">
            <img src={img1} className=" w-full object-cover " alt="" />
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 space-x-3 left-20 top-1/2">
            <div className="flex space-y-4 flex-col w-2/5">
              <h1 className="text-6xl text-white leading-[75px] font-bold ">
                Affordable Price For Car Servicing
              </h1>
              <p className="text-white text-xl leading-7">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div>
                <button className="bg-[#FF3811] text-white px-3 py-2 text-xl rounded">
                  Discover More
                </button>
                <button className="border-white border-2 text-white px-3 py-2 rounded text-xl ml-3">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 space-x-3 right-5 bottom-2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div> */}

        {/* <div id="slide2" className="carousel-item relative w-full scroll-mt-12">
          <img src={img2} className="w-full" alt="" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full scroll-mt-12">
          <img src={img3} className="w-full" alt="" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full scroll-mt-12">
          <img src={img4} className="w-full" alt="" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Baner;
