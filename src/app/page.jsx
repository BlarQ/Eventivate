import Image from "next/image";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Testimonies from "./components/Testimonies";

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <Testimonies />
    </div>
  );
}
