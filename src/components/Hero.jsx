import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div
      className="flex mt-20 mb-20  border-slate-900 border-opacity-35 backdrop-blur-sm"
      id="Home"
    >
      <Image
        src="/faptos.png" // Path to the image in the public folder
        height={300}
        width={300}
        alt="Father of Aptos" // Always include the alt text for accessibility
        className="animated-glow bg-black bg-opacity-50 rounded-3xl p-14"
      />
      <div className="p-10 flex place-items-center">
        <h1 className="font-bold text-4xl font-mono">
          “The hair changes, but the soul never.”
        </h1>
      </div>
    </div>
  );
};

export default Hero;
