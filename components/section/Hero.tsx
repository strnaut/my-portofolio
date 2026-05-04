"use client";

import Image from "next/image";
import Container from "../Container";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";
import { Social_links } from "@/data/data";

function Hero() {
  return (
    <section id="hero" className="relative bg-surface-a0 text-white bg-[linear-gradient(to_right,#252525_1px,transparent_1px),linear-gradient(to_bottom,#252525_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[linear-gradient(to_bottom,black_85%,transparent_100%)]">
      <Container>
        <div className="grid grid-cols-2 items-center min-h-[calc(100vh-60px)]">
          <div className="col-span-1 flex justify-center p-4">
            <span className="absolute bg-radial from-primary-a40 to-primary-a0 z-0 w-120 h-120 mx-auto rounded-full -translate-y-7 blur-xs animate-bounce-slow" />
            <Image
              src="/main-photo-no-bg.webp"
              alt="main photo"
              width={1000}
              height={1000}
              className=" relative w-120 h-120 object-cover mx-auto z-10 mask-[linear-gradient(to_bottom,black_95%,transparent_100%)] drop-shadow-[-15px_6px_26px_rgba(0,0,0)]"
              priority
              draggable={false}
            />
          </div>
          <div className="col-span-1 flex flex-col justify-center p-4">
            <h2 className="text-primary-a30 text-4xl font-medium mb-1">
              Hi, I&apos;m
            </h2>
            <h1 className="group text-6xl font-bold mb-6 text-white cursor-default">
              <div>
                Far
                <span className="group-hover:text-primary-a0 transition-colors duration-300 ease-in-out">
                  ghali
                </span>
              </div>
              <div className="ps-4">Syafyurrahman</div>
            </h1>
            <h2 className="text-primary-a30 text-4xl font-medium mb-2 h-10">
              <TypeAnimation
                sequence={[
                  "Web Developer", 
                  1500, 
                  "Software Engineer", 
                  1500, 
                  "System analyst", 
                  1500,
                ]}
                wrapper="span"
                speed={50}
                deletionSpeed={50}
                repeat={Infinity}
              />
            </h2>
            <p className="text-lg text-surface-a50 text-justify mb-4">
              This portfolio showcases my projects and contributions as a
              developer in the technology field.
            </p>
            <div className="flex flex-wrap gap-4 font-semibold mb-4">
              <button className="text-surface-a0 px-4 py-2 bg-primary-a10 transition duration-300 rounded-lg hover:-translate-y-0.5 ease-in-out shadow-md hover:shadow-primary-a0/50">
                View My Work
              </button>
              <button className="text-primary-a20 px-4 py-2 bg-surface-a10 border border-primary-a10 transition duration-300 rounded-lg hover:-translate-y-0.5 ease-in-out shadow-md hover:shadow-primary-a0/50">
                Get in Touch
              </button>
            </div>
            <div className="flex items-center space-x-6">
              {Social_links.map((social) => (
                <Link
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-surface-a30 hover:text-primary-a20 transition hover:-translate-y-0.5 duration-300 ease-in-out text-3xl"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

//
export default Hero;
