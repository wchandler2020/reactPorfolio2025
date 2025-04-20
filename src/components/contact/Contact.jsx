import React from "react";
import { CONTACT } from "../../constants";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <h1 className="my-10 text-center text-4xl">Lets Talk</h1>
      <div className="flex text-center tracking-tighter justify-center md:flex-row flex-col">
        <span className="mr-2 rounded bg-neutral-900 py-2 px-8 text-sm font-medium text-purple-900 rounded-lg sm: mb-4">
          <a href="">
            <p className="my-4 text-neutral-200 flex items-center rounded-lg">
              <FaLocationDot className="mr-1" /> {CONTACT.address}
            </p>
          </a>
        </span>
        <span className="mr-2 rounded bg-neutral-900 py-2 px-8 text-sm font-medium text-purple-900 rounded-lg sm: mb-4">
          <a href="">
            <p className="my-4 text-neutral-200 flex items-center">
              <MdEmail className="mr-1" /> {CONTACT.email}
            </p>
          </a>
        </span>
        <span className="mr-2 rounded bg-neutral-900 py-2 px-8 text-sm font-medium text-purple-900 rounded-lg sm: mb-4">
          <a href="">
            <p className="my-4 text-neutral-200 flex items-center"  style={{fontSize: '1.2em'}}>
              {" "}
              <FaPhone className="mr-1" /> {CONTACT.phoneNo}
            </p>
          </a>
        </span>
      </div>
    </div>
  );
};

export default Contact;
