import Image from "next/image";
import Container from "./Container";
import heroImg from "../../../../public/images/ether.png";
import Link from "next/link";
import { Connection } from "../Connection";
import Conversion from "../Conversion";

const Hero = () => {
  return (
    <>
      <Container className="flex flex-wrap ">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
              Connecter et Convertir
            </h1>
            <Conversion />
          </div>
        </div>
        <div className="hidden  items-center justify-center w-full lg:w-1/2 lg:flex">
          <div className="">
            <Image
              src={heroImg}
              width="500"
              height="500"
              className={"object-cover"}
              alt="Hero Illustration"
              loading="eager"
              placeholder="blur"
            />
          </div>
        </div>
      </Container>
    </>
  );
};

export default Hero;
