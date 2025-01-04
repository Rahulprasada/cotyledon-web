import React from "react";
import image from "../Assets/container.png";

export default function Home() {
  return (
    <>
      <img 
        src={image} 
        alt="bnm" 
        style={{ 
          width: "100%", 
          height: "auto", 
          maxWidth: "100%", 
          objectFit: "cover",
          display: "block" // Ensures no extra space below the image
        }} 
      />
    </>
  );
}
