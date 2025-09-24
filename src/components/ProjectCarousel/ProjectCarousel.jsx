import React from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./ProjectCarousel.scss";

const ProjectCarousel = ({ projects = [], onViewAll }) => {
  const isSingle = (projects?.length || 0) === 1;
  return (
    <div className="project-carousel">
      <Swiper
        modules={[Navigation]}
        centeredSlides
        loop
        speed={500}
        navigation={{
          nextEl: ".project-carousel__next",
          prevEl: ".project-carousel__prev",
        }}
        breakpoints={{
          0: { slidesPerView: 1.2, spaceBetween: 12 },
          640: { slidesPerView: 3, spaceBetween: 16 },
          1024: { slidesPerView: 5, spaceBetween: 20 },
        }}
        className="project-carousel__swiper"
      >
        {projects.map((p, idx) => (
          <SwiperSlide
            key={idx}
            className={`project-slide ${isSingle ? "no-dim" : ""}`}
          >
            <div className="project-card">
              <div className="project-card__img">
                <img src={p.image} alt={p.title} />
                <div className="project-card__overlay">
                  {p.live && (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Live Demo"
                    >
                      <AiFillEye />
                    </a>
                  )}
                  {p.code && (
                    <a
                      href={p.code}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Source Code"
                    >
                      <AiFillGithub />
                    </a>
                  )}
                </div>
              </div>
              <div className="project-card__content">
                <h4>{p.title}</h4>
                <p className="project-card__desc">{p.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <button className="project-carousel__prev" aria-label="Previous">
        ‹
      </button>
      <button className="project-carousel__next" aria-label="Next">
        ›
      </button>

     
    </div>
  );
};

export default ProjectCarousel;
