import React from "react";
import { BsInstagram, BsLinkedin ,} from "react-icons/bs";

const SocialMedia = () => {
  return (
    <div className="app__social">
        <a href="https://www.instagram.com/_mega1411/">
      <div>
        <BsInstagram />
      </div>
      </a>
      <a href="https://www.linkedin.com/in/youssef-abdelmaged-8b6a791bb/">
      <div>
        <BsLinkedin />
      </div>
      </a>
    </div>
  );
};

export default SocialMedia;
