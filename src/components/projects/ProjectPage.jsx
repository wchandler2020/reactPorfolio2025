import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { IoMdMore } from "react-icons/io";
import { Link } from "react-router-dom";

import { IoMdArrowBack } from "react-icons/io";

const ProductPage = ({ data }) => {
  const [images, setImages] = useState({
    img1: data["image"],
    img2: data["image_1"],
    img3: data["image_2"],
    img4: data["image_3"],
  });

  const [activeImg, setActiveImage] = useState(images.img1);
  const [amount, setAmount] = useState(1);

  return (
    <div>
      <Link to={'/'}>
        <IoMdArrowBack size={36} className="mb-2" />
      </Link>

      <div className="flex flex-col justify-between lg:flex-row gap-8 lg:items-center">
        <div className="flex flex-wrap gap-6 lg:w-2/4">
          <img
            src={activeImg}
            alt=""
            className="w-full h-full aspect-square object-cover rounded-xl"
          />
          <div className="flex flex-row justify-between h-24 gap-4">
            <img
              src={images.img1}
              alt=""
              className="w-24 h-24 rounded-md cursor-pointer"
              onClick={() => setActiveImage(images.img1)}
            />
            <img
              src={images.img2}
              alt=""
              className="w-24 h-24 rounded-md cursor-pointer"
              onClick={() => setActiveImage(images.img2)}
            />
            <img
              src={images.img3}
              alt=""
              className="w-24 h-24 rounded-md cursor-pointer"
              onClick={() => setActiveImage(images.img3)}
            />
            <img
              src={images.img4}
              alt=""
              className="w-24 h-24 rounded-md cursor-pointer"
              onClick={() => setActiveImage(images.img4)}
            />
          </div>
        </div>
        {/* ABOUT */}
        <div className="flex flex-col gap-4 lg:w-2/4">
          <div>
            <h1 className="text-4xl lg:text-6xl md:text-5xl  semi-bold text-purple-400">
              {data["title"]}
            </h1>
          </div>
          <p className="text-neutral-400 font-light">{data["description"]}</p>
          <div className="flex flex-row gap-4 mb-4">
            {data.technologies.map((item, index) => (
              <span
                key={index}
                className="mr-2 rounded bg-neutral-900 py-1 px-2 text-sm font-medium text-purple-900"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="flex flex-row items-center gap-4">
            <Link
              to={data["demo_link"]}
              className="flex items-center bg-transparent border-2 border-purple-400 hover:border-transparent text-neutral-400 hover:bg-purple-400 hover:text-white font-light py-2 px-4 rounded"
            >
              <IoMdMore className="mr-1" />
              Live Demo
            </Link>
            <Link
              href={data["github_link"]}
              className="flex items-center bg-transparent border-2 border-purple-400 hover:border-transparent text-neutral-400 hover:bg-purple-400 hover:text-white font-light py-2 px-4 rounded"
            >
              <FaGithub className="mr-1" />
              View Repository
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
