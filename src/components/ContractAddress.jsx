import React from "react";

const ContractAddress = () => {
  return (
    <div className=" p-5 mt-10 border-t-4 border-slate-300 border-opacity-35 max-lg:m-2 max-sm:p-3">
      <div className="flex items-center flex-col justify-center">
        <div className="w-full grid place-items-center p-3 rounded-full bg-slate-900 backdrop-blur-md  mt-10 bg-opacity-80">
          <h1 className="lg:text-3xl font-bold font-mono">Contract Address</h1>
        </div>
        <p className="mt-4 p-5 rounded-3xl font-mono font-bold text-sm bg-slate-30 backdrop-blur-md bg-opacity-80 max-lg:!text-sm max-lg:p-2 max-md:max-w-[250px] break-words max-sm:p-3">
          0x135726730c0e4e71652a6726354f148dec46974d5c152b0042ad58b37ea3c864::FaptOS::FaptOS
        </p>
      </div>
    </div>
  );
};

export default ContractAddress;
