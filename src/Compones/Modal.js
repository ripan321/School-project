import React, { useRef } from "react";
import "../Compones/Model.css";
import { X } from "lucide-react";
import { motion } from "framer-motion";

const Modal = ({ onClose, card }) => {
  const modalRaf = useRef();

  const closeModal = (e) => {
    if (modalRaf.current === e.target) {
      onClose();
    }
  };

  return (
    <motion.div
      ref={modalRaf}
      onClick={closeModal}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.4, delay: 0.05 }}
      className="popup"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 0.05 }}
        className="pop-box"
      >
        <button className="button" onClick={onClose}>
          <X size={30} />
        </button>
        <div className="main-box">
          <h1
            className="text-bg"
            style={{ placeSelf: "center", margin: "0.5rem" }}
          >
            {card.title}
          </h1>
          <div
            className="pop-body"
            style={{
              display: "flex",
              gap: "20px",
              justifyContent: "space-between",
              height: "100%",
            }}
          >
            <div className="sub-list">
              <h3 className="heading" style={{
              margin:"5px",
              placeSelf:"center",
              color: "#afaaa9d7",


            }}
              >Syllabus for 2nd unit test</h3>
              <h2>Subject :</h2>
              <div className="sub-s">
                <div className="per-sub">
                  <div className="sub-n">{card.sub1}</div>
                  {/* <div>:</div> */}
                  <div className="sub-ss">{card.ssub1}</div>
                </div>
                <div className="per-sub">
                  <div className="sub-n">{card.sub2} </div>
                  {/* <div>:</div> */}
                  <div className="sub-ss">{card.ssub2}</div>
                </div>
                <div className="per-sub">
                  <div className="sub-n">{card.sub3}</div>
                  {/* <div>:</div> */}
                  <div className="sub-ss">{card.ssub3}</div>
                </div>
                <div className="per-sub">
                  <div className="sub-n">{card.sub4}</div>
                  {/* <div>:</div> */}
                  <div className="sub-ss">{card.ssub4}</div>
                </div>
                <div className="per-sub">
                  <div className="sub-n">{card.sub5} </div>
                  {/* <div>:</div> */}
                  <div className="sub-ss">{card.ssub5}</div>
                </div>
                <div className="per-sub">
                  <div className="sub-n">{card.sub6}</div>
                  {/* <div>:</div> */}
                  <div className="sub-ss">{card.ssub6}</div>
                </div>
                <div className="per-sub">
                  <div className="sub-n">{card.sub7}</div>
                  {/* <div>:</div> */}
                  <div className="sub-ss">{card.ssub7}</div>
                </div>

                
              </div>
            </div>
            <div className="notice">
              <div>
                <h3 style={{ placeSelf: "center", marginBottom: "0" }}>
                  NOTICE
                </h3>
                <hr style={{ width: "90%", marginTop: "0" }} />
                <div className="notice-note">
                  <li>{card.notice1}</li>
                  <li>{card.notice2}</li>
                  <li>{card.notice3}</li>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Modal;
