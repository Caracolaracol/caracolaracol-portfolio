"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import ParticlesTS from "@/components/Particles";

import Image from "next/image";
import myself1 from "@/public/images/yo.jpg";
import myself2 from "@/public/images/yo2.jpg";
import LoaderScreen from "@/components/LoaderScreen";

function Page() {
  const refLinks = useRef<HTMLDivElement | any>(null);
  const [loadedCount, setLoadedCount] = useState(0);

  const handleImageLoad = () => {
    setLoadedCount((prevCount) => prevCount + 1);
  };

  const allImagesLoaded = loadedCount === 2;

  const language = "EN";
  const styles = "font-chrono text-2xl tablet:text-3xl laptop:text-4xl p-2";

  const handlerMouseLinks = (event: any) => {
    // BG ANIMATED OF FOOTER LINKS
    const { left, top, width, height }: any =
      event.target.getBoundingClientRect();
    refLinks.current.style.opacity = "1";
    refLinks.current.style.visibility = "visible";
    refLinks.current?.style.setProperty("--left", `${left}px`);
    refLinks.current?.style.setProperty("--top", `${top + 35}px`);
    refLinks.current?.style.setProperty("--width", `${width}px`);
    refLinks.current?.style.setProperty("--height", `${height - 40}px`);
  };

  const handlerLeaveLinks = () => {
    // Leave mouse of the footer links
    refLinks.current.style.opacity = "0";
    refLinks.current.style.visibility = "hidden";
  };

  return (
    <>
      {allImagesLoaded ? (
        <div className="transition_verylong mb-12 flex flex-col items-center justify-center self-center">
          <header className="mb-4 flex h-[237px] w-64 justify-center">
            <div className="relative flex h-full w-full items-end justify-center rounded-full">
              <Image
                alt="Myself with nature background"
                src={myself2}
                onLoad={handleImageLoad}
                loading="eager"
                className="circle_img_1"
              />
              <Image
                alt="Myself with other nature background "
                className="circle_img_2"
                loading="eager"
                onLoad={handleImageLoad}
                src={myself1}
              />
            </div>
          </header>
          <main className="z-50 flex flex-col flex-nowrap justify-evenly px-2  text-center">
            <h1 className="font-tommy tablet:tracking-wide tablet:text-5xl laptop:text-6xl desktop:text-7xl laptop:tracking-normal cursor-default overflow-hidden text-[2.4rem]">
              Caracolaracol{" "}
              <span className="text-ocre font-tommy tablet:text-4xl laptop:text-6xl desktop:text-7xl text-4xl font-bold">{`//`}</span>{" "}
              Creative Developer
            </h1>
            <p className="font-tommy tablet:text-lg desktop:text-xl tablet:pt-2 tablet:tracking-wider dark:text-lavenderblush text-sm">
              <span className="text-cerise tablet:text-lg desktop:text-xl tablet:tracking-wide font-tommy">
                #{" "}
              </span>
              {language == "EN"
                ? `Hi there! I'm Agustín Rojas, I'm a web developer and artist. `
                : `Hola! Soy Agustin Rojas, desarrollador web y artista.`}
            </p>
            <h2 className={`${styles} pt-2`}>
              {language == "EN"
                ? `Welcome to my site!`
                : `Bienvenidx a mi sitio!`}
            </h2>
          </main>

          <nav className="tablet:py-3 z-50 flex justify-center py-2">
            <Link href="/portfolio">
              <button className="font-tommy bg-violet text-platinum hover:text-cerise dark:bg-violet dark:hover:text-cerise dark:text-blancon tablet:py-0 tablet:h-14 tablet:px-4  desktop:px-7 desktop:py-8 tablet:text-4xl desktop:text-4xl tablet:tracking-wider tablet:min-w-[20rem] laptop:min-w-[22rem] group flex h-10 w-fit min-w-[14.5rem] items-center justify-center gap-2 rounded-lg px-6  py-6 text-2xl transition-colors">
                <p className="text-cerise group-hover:text-snow transition-colors">
                  {"{"}
                </p>
                {language == "EN" ? ` My Portfolio ` : `Mi portafolio`}
                <p className="text-cerise group-hover:text-snow transition-colors">
                  {"}"}
                </p>
              </button>
            </Link>
          </nav>
          <footer className="dark:text-platinum z-50 mb-8 flex flex-col justify-between text-center">
            <ul className="flex shrink gap-2">
              <li
                className=""
                onMouseEnter={handlerMouseLinks}
                onMouseLeave={handlerLeaveLinks}
              >
                <a
                  className={styles}
                  href="https://github.com/Caracolaracol"
                  target="_blank"
                >
                  Github
                </a>
              </li>
              <li
                onMouseEnter={handlerMouseLinks}
                onMouseLeave={handlerLeaveLinks}
              >
                <a
                  className={styles}
                  href="https://www.linkedin.com/in/agustin-rojas-c4r4c01/"
                  target="_blank"
                >
                  Linkedin
                </a>
              </li>
              <li
                onMouseEnter={handlerMouseLinks}
                onMouseLeave={handlerLeaveLinks}
              >
                <a
                  className={styles}
                  href="https://www.instagram.com/caracol.___/"
                  target="_blank"
                >
                  Instagram
                </a>
              </li>
              <li
                onMouseEnter={handlerMouseLinks}
                onMouseLeave={handlerLeaveLinks}
              >
                <a
                  className={styles}
                  href="https://docs.google.com/document/d/1p8NlNx_SESv5QeNiyZMEQTllUpHzBwEa34wesV15dyI/edit?usp=sharing"
                  target="_blank"
                >
                  CV
                </a>
              </li>
            </ul>
            <div
              ref={refLinks}
              className={`
                                bg-cerise/20 absolute left-[var(--left)] top-[var(--top)]
                                -z-10 h-[var(--height)]

                                w-[var(--width)] rounded-md
                                opacity-0 backdrop-blur-lg
                                transition-all
                                duration-300
                                ease-in-out
                            `}
            ></div>
            <div className={`flex justify-center gap-3`}> </div>
          </footer>
          <ParticlesTS />
        </div>
      ) : (
        <LoaderScreen />
      )}
    </>
  );
}

export default Page;
