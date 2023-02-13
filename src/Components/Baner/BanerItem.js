import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "./Baner.css";
const BanerItem = ({ slide }) => {
  const { image, id, prev, next } = slide;

  return (
    <div
      id={`slide${id}`}
      className="carousel-item relative w-full scroll-mt-12 "
    >
      <div className="img-gradient">
        <img src={image} className=" w-full object-cover " alt="" />
      </div>
      <div className="absolute flex justify-between transform -translate-y-1/2 space-x-3 left-20 top-1/2">
        <div className="flex space-y-4 flex-col w-2/5">
          <h1 className="text-6xl text-white leading-[75px] font-bold ">
            Affordable Price For Car Servicing
          </h1>
          <p className="text-white text-xl leading-7">
            There are many variations of passages of available, but the majority
            have suffered alteration in some form
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
        <a
          href={`#slide${prev}`}
          className="btn btn-circle bg-slate-500 border-none"
        >
          <FaArrowLeft></FaArrowLeft>
        </a>
        <a href={`#slide${next}`} className="btn btn-circle bg-[#ff3811]">
          <FaArrowRight></FaArrowRight>
        </a>
      </div>
    </div>
  );
};

export default BanerItem;
