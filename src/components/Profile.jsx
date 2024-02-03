import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";

const Banner = () => {
    const [displayText, setDisplayText] = useState('');
    const [index, setIndex] = useState(0);
    const roles = ["FrontEnd Programmer", "Graphic Designer", "UI/UX Designer", "Sosial Media Specialist"];

    useEffect(() => {
        const timer = setTimeout(() => {
            setDisplayText(roles[index % roles.length]);
            setIndex((prev) => prev + 1);
        }, 2000);
        return () => clearTimeout(timer);
    }, [displayText, index, roles]);

    return (
        <section id="home" class="pt-36 dark:bg-dark transition-all ease-in duration-500">
            <div class="container">
                <div class="flex flex-wrap">
                    <div class="w-full self-center px-4 lg:w-2/3">
                    <motion.div
                    initial={{ y: "2rem", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                        duration: 2,
                        type: "spring",
                    }}>
                        <h1 class="text-base font-semibold text-primary dark:text-primary2 md:text-xl z-20">Halo Everyone, Saya 
                            <span class="block font-bold text-dark text-4xl mt-1 lg:text-5xl dark:text-white transition-all ease-in duration-500 z-20">Taufiq Aditya Putra</span></h1>
                        <h2 class="font-medium text-secondary text-lg mb-5 mt-2 lg:text-2xl">sebagai  
                            <span class="text-dark dark:text-white transition-all ease-in duration-500"> {displayText}</span>
                        </h2>
                        <p class="font-medium text-secondary mb-10 leading-relaxed">Saya merupakan lulusan S1 Informatika dengan hasil kerja keras. Saya memiliki pengalaman yang solid dan keterampilan yang kuat dalam bidang UI/UX dan desain grafik. Dengan latar belakang yang beragam, saya telah berhasil menghasilkan antarmuka pengguna yang menarik dan fungsional untuk berbagai platform dan aplikasi.</p>
                        <a href="https://drive.google.com/drive/folders/1M_XfxosvBDx4xMqYK0prS2Ku7xGkSZ0p?usp=drive_link" class="text-base font-semibold text-white py-3 px-8 rounded-full bg-primary dark:bg-primary2 dark:text-dark dark:shadow-primary2/50  shadow-primary/50 shadow-lg hover:opacity-80 transition duration-300 ease-in-out">Download CV</a>
                    </motion.div>
                    </div>
                    
                    <div class="w-full self-end px-4 lg:w-1/3">
                        <div class="relative mt-10 lg:mt-9 lg:right-0">
                        <motion.div initial={{ x: "7rem", opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{
                            duration: 2,
                            type: "spring",
                        }}>
                            <img src="./img/myfoto.png" alt="Taufiq Aditya" class="relative z-10 max-w-full mx-auto"/>
                            <div class="absolute rounded-full w-60 h-60 bg-primary dark:bg-primary2 bottom-6 left-1/2 -translate-x-1/2 transition-all duration-300 ease-out"></div>
                        </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
