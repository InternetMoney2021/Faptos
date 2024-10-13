import Image from "next/image";
import Navbar from "../components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Buy from "@/components/Buy";
import Socials from "@/components/Socials";
import ContractAddress from "@/components/ContractAddress";
import Tokenomics from "@/components/Tokenomics";
import Chart from "@/components/Chart";

export default function Home() {
  return (
    <main className="flex justify-center bg-cover bg-center bg-[url('/bg5.png')]">
      <div className=" flex p-20 justify-center max-w-[1024px] flex-col">
        <Navbar />
        <Hero />
        <ContractAddress />
        <About />
        <Tokenomics />
        <Buy />
        <Chart />
        <Socials />
      </div>
    </main>
  );
}
