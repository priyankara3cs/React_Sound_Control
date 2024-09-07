import React from "react";
import { motion } from "framer-motion";
import ScrollSound from "./ScrollSound"; // Import the ScrollSound component

const galleryItems = [
  { id: 1, title: "Fragrance 1", img: "/images/1.jpg" },
  { id: 2, title: "Fragrance 2", img: "/images/2.jpg" },
  { id: 3, title: "Fragrance 3", img: "/images/3.jpg" },
];

const Gallery = () => {
  return (
    <div style={{ height: "200vh" }}>
      {" "}
      {/* Increased height to enable scrolling */}
      <ScrollSound /> {/* Attach the ScrollSound component */}
      <div className="gallery">
        {galleryItems.map((item) => (
          <motion.div
            key={item.id}
            className="gallery-item"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <img src={item.img} alt={item.title} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
