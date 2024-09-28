import React , {useEffect} from 'react'
import ProgressBar from '@ramonak/react-progress-bar';

import skill from "@/public/skill1.jpg";

import Aos from 'aos';
import "aos/dist/aos.css";

import Image from 'next/image';

export default function Skill() {

    useEffect(()=>{
        Aos.init({duration:3000});

    },[])


    return (
        <div className="z-50 items-center w-max   p-2 gap-10  text-white ">
            <div className=" m-auto flex  sm:flex-row justify-between gap-10 md:flex-col-3 lg:flex-col-3">
                <div>
                    <div data-aos = "fade-left"  className=" w-96 m-2 bg-black p-2 px-2 rounded-lg shadow-black shadow-md dark:bg-gray-700 dark:text-white  ">
                        <p className="mb-1"> JavaScript </p>
                        <ProgressBar completed={91} bgColor='#2896b2' animateOnRender={true} />
                    </div>
                    <div data-aos = "fade-left" className=" w-96 m-2 bg- p-2 rounded-lg bg-black shadow-black shadow-md dark:bg-gray-700 dark:text-white">
                        <p className="mb-1"> Java </p>
                        <ProgressBar completed={75} bgColor='#2896b2' animateOnRender={true} />
                    </div>
                    <div  data-aos = "fade-left" className=" w-96 m-2 bg- p-2 rounded-lg bg-black shadow-black shadow-md dark:bg-gray-700 dark:text-white">
                        <p className="mb-1"> Node JS </p>
                        <ProgressBar completed={83} bgColor='#2896b2' animateOnRender={true} />
                    </div>
                    <div data-aos = "fade-left" className=" w-96 m-2 bg- p-2 rounded-lg bg-black shadow-black shadow-md dark:bg-gray-700 dark:text-white">
                        <p className="mb-1"> Python </p>
                        <ProgressBar completed={80} bgColor='#2896b2' animateOnRender={true} />
                    </div>
                </div>
                <div>
                    <div className=" relative mx-auto bg-gradient-to-b from-teal-500 rounded-full
                     w-40 h-40 mt-20 overflow-hidden md:h-40 md:w-40 shadow-md shadow-black ">
                        <Image data-aos = "zoom-out" src={skill} layout="fill" objectFit="cover" />
                    </div>
                </div>
                <div className="">
                    <div data-aos = "fade-right"  className=" w-96 m-2 bg- p-2 rounded-lg bg-black shadow-black shadow-md dark:bg-gray-700 dark:text-white">
                        <p className="mb-1"> React </p>
                        <ProgressBar completed={85} bgColor='#2896b2' animateOnRender={true} />
                    </div>
                    <div  data-aos = "fade-right" className=" w-96 m-2 bg- p-2 rounded-lg bg-black shadow-black shadow-md dark:bg-gray-700 dark:text-white">
                        <p className="mb-1"> Next Js </p>
                        <ProgressBar completed={82} bgColor='#2896b2' animateOnRender={true} />
                    </div>
                    <div data-aos = "fade-right" className=" w-96 m-2 bg- p-2 rounded-lg bg-black shadow-black shadow-md dark:bg-gray-700 dark:text-white">
                        <p className="mb-1"> MySql </p>
                        <ProgressBar completed={74} bgColor='#2896b2' animateOnRender={true} />
                    </div>
                    <div data-aos = "fade-right" className=" w-96 m-2 bg- p-2 rounded-lg bg-black  shadow-black shadow-md dark:bg-gray-700 dark:text-white">
                        <p className="mb-1"> Tailwind </p>
                        <ProgressBar completed={85} bgColor='#2896b2' animateOnRender={true} />
                    </div>
                </div>
            </div>
        </div>
    )
}
