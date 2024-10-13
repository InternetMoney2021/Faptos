import Image from "next/image";
import Link from "next/link";
import React from "react";

const Buy = () => {
  return (
    <div className=" p-5 mt-20 mb-20" id="Buy">
      <div className="flex flex-col items-center font-mono gap-10">
        <div>
          <h1 className="text-4xl font-bold">Where to BUY?</h1>
        </div>
        <div className="flex flex-col  items-center gap-5">
          <Link
            href="https://liquidswap.com/"
            className="cursor-pointer"
            legacyBehavior
          >
            <a target="_blank" rel="noopener noreferrer">
              <Image
                src="/liquid.png"
                width={100}
                height={100}
                alt="Liquid"
                className=" border-white p-1 rounded-full bg-black"
              />
            </a>
          </Link>
          <p className="text-xl font-semibold">Liquid Swap</p>
        </div>
      </div>
    </div>
  );
};

export default Buy;
