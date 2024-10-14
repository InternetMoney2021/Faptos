import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div
      className="flex mt-20 mb-20  border-slate-900 border-opacity-35 backdrop-blur-sm max-lg:flex-col justify-center items-center"
      id="Home"
    >
      <Image
        src="/faptos.png" // Path to the image in the public folder
        height={300}
        width={300}
        alt="Father of Aptos" // Always include the alt text for accessibility
        className="animated-glow bg-black bg-opacity-50 rounded-3xl p-14"
      />
      <div className="p-10 flex place-items-center flex-col gap-20">
        <h1 className="text-7xl font-bold font-mono max-sm:text-3xl">
          $faptOS
        </h1>
        <h1 className="font-bold text-2xl font-mono">
          “The hair changes, but the soul never.”
        </h1>
      </div>
    </div>
  );
};

export default Hero;
