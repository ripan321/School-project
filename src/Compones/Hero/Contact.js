import React from "react";
import "./Contact.css";
import { IoIosMail } from "react-icons/io";
import { GiWorld } from "react-icons/gi";
import { IoCall } from "react-icons/io5";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <>
      <div className="main-con">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
          className="left-con"
        >
          <div className="icon-part">
            <div className="icon-name">
              {" "}
              <IoIosMail size={25} />
              <strong className="text-bg">Write us</strong>
            </div>
            <div className="icon-info">info@beekoder.in</div>
          </div>
          <div className="icon-part">
            <div className="icon-name">
              {" "}
              <GiWorld size={22} />
              <strong className="text-bg">Visit us</strong>
            </div>
            <div className="icon-info">
              House no-6, 2nd cross, 2nd Cross, Babusapalya, Mallappa Layout,
              Prakruthi Twp, Bengaluru, Karnataka 560043
            </div>
          </div>
          <div className="icon-part">
            <div className="icon-name">
              {" "}
              <IoCall size={22} />
              <strong className="text-bg">Call us</strong>
            </div>
            <div className="icon-info">+91 7002899243, +91 9025795814</div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
          className="right-con"
        >
          <div>
            <h1>Have a question? Please write us.</h1>

            <div
              style={{ color: "rgba(179, 180, 182, 0.884)", fontSize: "18px" }}
            >
              Tell us more about yourself
            </div>
          </div>

          <form>
            <div className="in-name">
              <div className="f-name">
                {" "}
                <label>
                  First Name{" "}
                  <span>
                    <sup className="span">*</sup>
                  </span>
                </label>
                <input
                  className="n-input"
                  type="text"
                  placeholder="Enter First Name"
                  required
                ></input>
              </div>
              <div className="f-name">
                {" "}
                <label>
                  Last Name{" "}
                  <span>
                    <sup className="span">*</sup>
                  </span>
                </label>
                <input
                  className="n-input"
                  type="text"
                  placeholder="Last First Name"
                  required
                ></input>
              </div>
            </div>
            <div className="email">
              <label>Email Address</label>
              <input type="email" placeholder="Enter email address" className="n-input"></input>
            </div>
            <div className="email">
              <label>
                Phone Number{" "}
                <span>
                  <sup className="span">*</sup>
                </span>
              </label>
              <input className="n-input"
                type="number"
                placeholder="Enter Phone Number"
                required
              ></input>
            </div>
            <div className="email">
              <label>Message</label>
              <textarea placeholder="Enter your message here..." />
            </div>
            <div>
              <button className="send-butt">Send Message</button>
            </div>
          </form>
        </motion.div>
      </div>
    </>
  );
};

export default Contact;
