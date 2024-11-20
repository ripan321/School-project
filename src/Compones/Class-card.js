// import Modal from "./Modal";
// import React, { useState } from "react";
// import cards from "./Data/Cards";
// import { motion } from "framer-motion";

// const framerright = {
//   hidden: {
//     opacity: 0,
//     x: 0,
//     y: 50,
//   },
//   show: (index) => ({
//     opacity: 1,
//     x: 0,
//     y: 0,
//     transition: { duration: 0.5, delay: 0.1 * index },
//   }),
// };

// const Classcard = () => {
//   const [selectedCard, setSelectedCard] = useState(null);
//   const [showModal, setShowModal] = useState(false);

//   const handleCardClick = (card) => {
//     setSelectedCard(card); // Store the selected card object
//     setShowModal(true);
//   };

//   return (
//     <div
//       style={{
//         display: "flex",
//         gap: "25px",
//         flexWrap: "wrap",
//         justifyContent: "center",
//         margin: "2rem",
//         marginTop: "3rem",
//       }}
//     >
//       {cards.map((card) => (
//         <motion.div
//           initial="hidden"
//           whileInView="show"
//           variants={framerright}
//           custom={card.id}
//           viewport={{ once: true }}
//           key={card.id}
//           style={{
//             display: "flex",
//             flexDirection: "column",
//             background: "linear-gradient(347deg, #453838 0%, #11101d 100%)",
//             overflow: "hidden",
//             borderRadius: "8px",
//             cursor: "pointer",
//             width: "230px",
//           }}
//           onClick={() => handleCardClick(card)}
//         >
//           <img
//             src={card.img}
//             alt="star Img"
//             style={{
//               width: "100%",
//               objectPosition: "center",
//               objectFit: "cover",
//               height: "9vmax",
//             }}
//           />
//           <p
//             className="text-bg"
//             style={{ margin: "17px 12px 5px", fontSize: "20px", color: "white" }}
//           >
//             <strong>{card.title}</strong>
//           </p>

//           <p style={{ margin: "5px 12px 15px", fontSize: "18px", color: "white" }}>
//             {card.description}
//           </p>
//         </motion.div>
//       ))}
//       {showModal && selectedCard && (
//         <Modal onClose={() => setShowModal(false)} card={selectedCard} />
//       )}
//     </div>
//   );
// };

// export default Classcard;


import Modal from "./Modal";
import React, { useState } from "react";
import cards from "./Data/Cards";
import { motion } from "framer-motion";

const framerright = {
  hidden: {
    opacity: 0,
    x: 0,
    y: 50,
  },
  show: (index) => ({
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 0.5, delay: 0.1 * index },
  }),
};

const Classcard = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleCardClick = (card) => {
    setSelectedCard(card); // Store the selected card object
    setShowModal(true);
  };

  return (
    <div
      style={{
        display: "flex",
        gap: "25px",
        flexWrap: "wrap",
        justifyContent: "center",
        margin: "2rem",
        marginTop: "3rem",
      }}
    >
      {cards.map((card) => (
        <motion.div
          initial="hidden"
          whileInView="show"
          variants={framerright}
          custom={card.id}
          viewport={{ once: true }}
          key={card.id}
          style={{
            display: "flex",
            flexDirection: "column",
            background: "linear-gradient(347deg, #453838 0%, #11101d 100%)",
            overflow: "hidden",
            borderRadius: "8px",
            cursor: "pointer",
            width: "100%", // Full width by default
            maxWidth: "230px", // Maximum width for larger screens
            minWidth:"230px",
            flex: "1 1 150px", // Flex property for responsiveness
          }}
          onClick={() => handleCardClick(card)}
        >
          <img
            src={card.img}
            alt="star Img"
            style={{
              width: "100%",
              objectPosition: "center",
              objectFit: "cover",
              height: "9vmax",
            }}
          />
          <p
            className="text-bg"
            style={{ margin: "17px 12px 5px", fontSize: "20px", color: "white" }}
          >
            <strong>{card.title}</strong>
          </p>

          <p style={{ margin: "5px 12px 15px", fontSize: "18px", color: "white" }}>
            {card.description}
          </p>
        </motion.div>
      ))}
      {showModal && selectedCard && (
        <Modal onClose={() => setShowModal(false)} card={selectedCard} />
      )}
    </div>
  );
};

export default Classcard;


