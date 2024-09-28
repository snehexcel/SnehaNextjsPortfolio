import { Inter } from "next/font/google";
import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";

import { DiCode } from "react-icons/di";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";

import Image from "next/image";
// import wave from "../public/dev-ed-wave.png"
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";
import { useState } from "react";
import Skill from "./components/Skill";
import image from "../public/girlavaatar.png"
import { FaGithub } from "react-icons/fa";



const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Sneha Kumari PortFolio</title>
        <meta
          name="format-detection"
          content="telephone=no, date=no, email=no, address=no"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" select-none bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900 dark:text-white  ">
        <section className=" min-h-screen">
          <nav className="p-10 mb-12 flex justify-between ">
            <div>
              <h1 className=" text-xl font-burtons">DEVELOPER</h1>

            </div>
            <div className="text-xl font-semibold"><a href="About">About</a></div>
            <ul className=" flex items-center ">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li>
              <li>
                <a
                  className=" bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                  href="https://drive.google.com/file/d/1kjjbrS8Njtt6fPuFN2iRnOnVomP4XSkg/view?usp=sharing" target="_blank"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>

          <div className=" text-center p-10 ">
            <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">
              Sneha Kumari
            </h2>
            <h3 className="text-2xl py-2 md:text-xl">Developer</h3>
            <p className="text-md  py-5 leading-8 text-gray-700 md:text-xl max-w-lq mx-auto dark:text-white">
              Hey! I'm Sneha Kumari, a Next.js developer known for my mastery of data structures, creative problem-solving,
              unwavering computer enthusiasm, and exceptional communication skills.
              With a deep understanding of data structures and a knack for blending logic and creativity,
              I excel at crafting elegant and efficient solutions in the ever-evolving world of software development.
              My journey is defined by a relentless pursuit of excellence,
              both in code and in my commitment to pushing the boundaries of what technology can achieve. Furthermore,
              my strong communication skills enable me to collaborate effectively,
              convey complex ideas clearly, and foster a cohesive team environment for successful project execution.
            </p>
          </div>

          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-500  dark:text-white">
            <a href="https://www.linkedin.com/in/sneha-kumari-goyal-9a0071252/?originalSubdomain=in" target="_blank">
              <AiFillLinkedin />
            </a>
            <a href="https://github.com/snehexcel">
              <FaGithub />
            </a>
            <a href="https://leetcode.com/u/Sneh_tech001/" target="_blank">
              <DiCode />
            </a>
          </div>

          <div className=" relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96">
            <Image src={image} layout="fill" objectFit="cover" />
          </div>
        </section>
        <section>
          <div>
            <h1 className="text-3xl py-1">Introduction</h1>
            <p className="text-md leading-8 text-black  dark:text-white ">
              {" "}
              Hello, I'm <strong>Sneha Kumari</strong>, a dedicated computer science student with an unwavering enthusiasm for all things related
              to computers and
              technology. My journey in the world of computing has been an exciting one,
              characterized by a constant quest for knowledge and a genuine passion for problem-solving.
            </p>
          </div>
        </section>
        <div className=" from-inherit mt-2 mb-2 text-3xl  "> Skills</div>

        <section>
          <div className="  justify-between pb-10 pt-5 pl-20 items-center  shadow-md  rounded-lg ">
            <Skill />
          </div>
        </section>

        <section >
          <div>
            <h3 className="text-3xl pb-1 pt-2 mt-3">Project</h3>
            <p className="text-md leading-8  py-2 text-gray-800  dark:text-white ">
              In the digital age, showcasing your work is essential, whether you're a designer, developer, artist, or entrepreneur.
              Our Next.js and Tailwind CSS-powered project section is designed to help you elegantly display your portfolio, achievements,
              or any collection of projects you're proud of. With the power of Next.js for seamless navigation and
            </p>

            <p className="text-md leading-8 justify-between text-justify text-gray-800  dark:text-white">
              Tailwind CSS for beautiful, responsive styling, your projects will shine like never before. In this section, we'll guide you through the process of creating a dynamic and visually appealing project display,
              ensuring that your work gets the attention it deserves. Let's dive in and bring your projects to life on the web!
            </p>
          </div>
          <div className="flex flex-col grid-cols-3 py-10 dark:bg-gray-900 gap-10 shadow-lg p-10 rounded-2xl pb-10  lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 shadow-lg  rounded-xl hover:scale-110 duration-300 ">
              <Image
                src={web1}
                className="rounded-lg object-cover"
                width={"100"}
                height={100}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1 shadow-lg p-10 rounded-xl hover:scale-110 duration-300">
              <Image
                src={web2}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1 shadow-lg p-10 rounded-xl hover:scale-110 duration-300">
              <Image
                src={web3}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1 shadow-lg p-10 rounded-xl hover:scale-110 duration-300">
              <Image
                src={web4}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1 shadow-lg p-10 rounded-xl hover:scale-110 duration-300">
              <Image
                src={web5}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1 shadow-lg p-10 rounded-xl hover:scale-110 duration-300">
              <Image
                src={web6}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100"}
                layout="responsive"
              />
            </div>
          </div>
          <div className="h-10 dark:bg-gray-900"></div>

        </section>

        {/* <section className= "grid gap-10 md:grid-cols-3 p-10 md:mx-96 md:items-center ">
          <div>Email</div>
          <div>Scroll Up</div>
          <div>About</div>
        </section>
        <div className="h-10 dark:bg-gray-900"></div> */}
      </main>
    </div>
  );
}
