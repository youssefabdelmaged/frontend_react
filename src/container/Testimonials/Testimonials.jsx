import React, { useState, useEffect } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { motion } from "framer-motion";
import { BsInstagram } from "react-icons/bs";

import { AppWrap, AppWrapper, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import "./Testimonials.scss";
const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [testimonials, setTestimonials] = useState([]);
  const [brands, setBrands] = useState([]);

  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const query = '*[_type == "testimonials"]';
    const brandsQuery = '*[_type == "brands"]';

    client.fetch(query).then((data) => {
      setTestimonials(data);
    });

    client.fetch(brandsQuery).then((data) => {
      setBrands(data);
    });
  }, []);

  const Test = testimonials[currentIndex];

  return (
    <>
      {testimonials.length && (
        <>
          <div className="app__testimonial-item app__flex">
            <img src={urlFor(Test.image)} alt="testimonial" />
            <div className="app__testimonial-content">
              <p className="p-text">{Test.feedback}</p>
              <div>
                <a href={Test.instaaccount} target="_blank">
                  <h4 className="bold-text">
                    <BsInstagram /> {Test.name}
                  </h4>
                </a>

                <h5 className="p-text">{Test.company}</h5>
              </div>
            </div>
          </div>

          <div className="app__testimonial-btns  app__flex">
            <div
              className="app__flex"
              onClick={() =>
                handleClick(
                  currentIndex === 0
                    ? testimonials.length - 1
                    : currentIndex - 1
                )
              }
            >
              <HiChevronLeft />
            </div>
            <div
              className="app__flex"
              onClick={() =>
                handleClick(
                  currentIndex === testimonials.length - 1
                    ? 0
                    : currentIndex + 1
                )
              }
            >
              <HiChevronRight />
            </div>
          </div>
        </>
      )}
      <div className="app__testimonial-brands app__flex">
        {brands?.map((brand)=>(
            <motion.div
            key={brand._id}
            whileInView={{opacity:[0,1]}}
            transition={{duration:0.5 ,type:'tween'}}
            >
                <img src={urlFor(brand.imgUrl)} alt={brand.name} />
            </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrapper(
  MotionWrap(Testimonials, "app__testimonial"),
  "testimonial",
  "app__primarybg"
);
