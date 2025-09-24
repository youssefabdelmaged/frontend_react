import React, { useEffect, useMemo, useState } from "react";
import "./Work.scss";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import { ProjectCarousel } from "../../components";

import { client, urlFor } from "./../../client";
import { AppWrapper, MotionWrap } from "../../wrapper";

const Work = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [works, setWorks] = useState([]);
  const [filterWorks, setFilterWorks] = useState([]);
  useEffect(() => {
    const query = '*[_type == "works"]';

    client.fetch(query).then((data) => {
      setWorks(data);
      setFilterWorks(data);
    });
  }, []);

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([
      {
        y: 100,
        opacity: 0,
      },
    ]);

    setTimeout(() => {
      setAnimateCard([
        {
          y: 0,
          opacity: 1,
        },
      ]);

      if (item === "All") {
        setFilterWorks(works);
      } else {
        setFilterWorks(works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };
  const projects = useMemo(
    () =>
      filterWorks.map((w) => ({
        title: w.title,
        description: w.description,
        image: w.imgUrl ? urlFor(w.imgUrl) : "",
        live: w.projectLink,
        code: w.codeLink,
        tags: w.tags,
      })),
    [filterWorks]
  );

  const handleViewAll = () => {
    window.location.hash = "#work";
  };

  return (
    <>
      <h2 className="head-text">
        My Creative <span>Portfolio</span> <br />
        means <span>Good Business</span>
      </h2>
      <div className="app__work-filter">
        {["Full Stack", "Next JS", "React JS", "All"].map((item, index) => (
          <div
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={`app__work-filter-item app__flex p-text ${
              activeFilter === item ? "item-active" : ""
            }`}
          >
            {item}
          </div>
        ))}
      </div>

      <ProjectCarousel projects={projects} onViewAll={handleViewAll} />
    </>
  );
};

export default AppWrapper(
  MotionWrap(Work, "app__works"),
  "work",
  "app__primarybg"
);
