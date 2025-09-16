"use client";
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { competencies, softSkills, technicalSkills } from "../constants"


gsap.registerPlugin(ScrollTrigger);
const About = () => {
    const softRef = useRef(null);

    useGSAP(() => {
        gsap.from(softRef.current.children, {
            opacity: 0,
            x: -40,
            duration: 0.6,
            stagger: 0.2,
            scrollTrigger: {
                trigger: softRef.current,
                start: "top 90%",
            },
        });
    }, []);

    return (
        <section
            id="about"
            className="relative w-full min-h-screen overflow-hidden py-20 sm:py-0"
        >
            <div className="absolute top-1/4 left-0 w-1/2 h-1/2 bg-gradient-to-l from-white to-violet-300 blur-2xl"></div>
            <div className="absolute top-10 right-0 w-1/6 h-1/2 bg-gradient-to-br from-white to-yellow-300 blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-1/4 h-1/2 bg-gradient-to-br from-white to-green-400 blur-3xl"></div>
            <div className="relative w-full max-w-7xl mx-auto px-4 min-h-screen flex">
                <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
                    <div className="flex items-center justify-center">
                        <div className="w-96 h-96 rounded-full overflow-hidden shadow-xl">
                            <img
                                src="/imgs/profile.jpg"
                                alt="About"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 flex items-center justify-center rounded-full border-2 text-2xl font-bold">
                                B
                            </div>
                            <div className="uppercase px-4 py-2 border-2 rounded-full font-bold tracking-wide">
                                <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500 bg-clip-text text-transparent">
                                    _About Me_
                                </span>
                            </div>
                        </div>
                        <h2 className="text-lg leading-relaxed mb-6">
                            I'm <strong>Baburao Adkane</strong>, a dedicated <strong>QA & QC Engineer</strong> with a passion for delivering flawless
                            software solutions through rigorous testing and continuous improvement.
                        </h2>
                        <p className="text-lg mb-6">
                            Over 3 years of experience across HRMS, ERP, Retail, Restaurant, CRM, Subscription, and Real Estate domains.
                        </p>
                        <div className="py-2">
                            <h2 className="uppercase text-center text-xl font-semibold mb-6">
                                Core Testing Competencies
                            </h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                                {competencies.map((item, index) => (
                                    <div
                                        key={index}
                                        className="p-2 text-center text-xs bg-green-200 shadow-md rounded-sm hover:shadow-lg transition"
                                    >
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div className="relative w-full max-w-7xl mx-auto px-4 py-12 min-h-screen flex items-center justify-center">
                <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24">  
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 flex items-center justify-center rounded-full border-2 text-2xl font-bold">
                                B
                            </div>
                            <div className="uppercase px-4 py-2 border-2 rounded-full font-bold tracking-wide">
                                <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500 bg-clip-text text-transparent">
                                    _Soft Skills_
                                </span>
                            </div>
                        </div>
                        <p className="text-lg mb-8 relative z-10">Soft skills are not just skills — thees are the foundation that
                            <span className="text-blue-600 font-bold"> shapes and defines </span> my professional journey.</p>
                        <div className="py-2">
                            <div
                                ref={softRef}
                                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4"
                            >
                                {softSkills.map((skill, index) => (
                                    <div
                                        key={index}
                                        className="p-2 text-center text-xs bg-green-200 shadow-md rounded-sm"
                                    >
                                        {skill}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-center">
                        <div className="w-full rounded-sm overflow-hidden">
                            <video
                                src="/videos/25.mp4"
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
                <div className="absolute w-full max-w-7xl mx-auto px-4 -bottom-10 md:bottom-24 flex items-center justify-center">
                    <p
                        className="text-sm sm:text-lg text-justify leading-relaxed">
                        Let's team up —
                        <span className="text-blue-600"> your ideas</span>,
                        <span className="text-blue-600"> my expertise</span>, and
                        <span className="text-blue-600"> a commitment to quality</span> every step of the way.
                    </p>
                </div>
            </div>

        </section>
    )
}

export default About