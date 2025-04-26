import React from "react";
import aboutImg from "../../assets/about/about_img.JPG";
import aboutImg2 from "../../assets/about/about_img_2.jpg";
import aboutImg3 from "../../assets/about/about_img_3.jpg";
import aboutImg4 from "../../assets/about/about_img_4.jpg";
import { ABOUT_TEXT } from "../../constants";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="text-4xl my-20 text-center">Get To Know Me</h2>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 lg:p-2">
          <div className="flex items-center justify-center">
            <img
              src={aboutImg4}
              alt="About william"
              height={500}
              width={500}
              className="rounded-lg"
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col justify-center lg:justify-start">
            {ABOUT_TEXT.map((text, index) => (
              <p
                key={index}
                className="max-w-xl my-2 font-light"
                style={{ lineHeight: 1.5, fontSize: 17, letterSpacing: 0.2 }}
              >
                {text}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
