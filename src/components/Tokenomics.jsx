import React from "react";

const Tokenomics = () => {
  return (
    <div
      className="p-20 mt-10 bg-slate-800 bg-opacity-70 rounded-3xl max-sm:p-4"
      id="Tokenomics"
    >
      <h1 className="text-4xl font-bold font-mono text-center max-sm:text-xl">
        Tokenomics
      </h1>
      <div className="flex flex-col items-center mt-12 max-sm:text-lg">
        <h1 className="font-bold text-2xl max-sm:text-lg mb-5">TOKEN SUPPLY</h1>
        <p className="font-mono font-bold text-3xl max-sm:text-lg">
          {" "}
          1,000,000,000 $FAPTOS
        </p>
        <br />
        <div className="max-sm:text-md">
          <p className="font-bold font-mono">
            <span>12%</span> (marketing, contest, exchange listing)
          </p>
          <p className="font-bold font-mono">
            <span>88%</span> Circulating
          </p>
        </div>
      </div>
    </div>
  );
};

export default Tokenomics;
