import Image from "next/image";
import Link from "next/link";
import React from "react";

const Socials = () => {
  return (
    <div className="border border-slate-900 border-opacity-35 p-5 mt-24 relative">
      <h1 className="text-4xl font-bold font-mono text-center">
        Join Our Community
      </h1>
      <div className="flex p-3 items-center justify-center">
        <Link href="https://t.me/fatherofaptosg" legacyBehavior>
          <a target="_blank" rel="noopener noreferrer">
            <Image
              src="/telegram.png"
              alt="Image description"
              className="p-3"
              width={100}
              height={100}
            />
          </a>
        </Link>
        <Link href="https://x.com/faptosonaptos1" legacyBehavior>
          <a target="_blank" rel="noopener noreferrer">
            <Image
              src="/x.png"
              alt="Image description"
              className="p-3"
              width={100}
              height={100}
            />
          </a>
        </Link>
      </div>
      {/* <Image
        src="/fil.png"
        width={300}
        height={300}
        className="absolute right-[10px] top-[-300px]"
      /> */}
    </div>
  );
};

export default Socials;
