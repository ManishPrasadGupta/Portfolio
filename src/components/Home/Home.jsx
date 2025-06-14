import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    const handleDownload = (e) => {
        e.preventDefault();
        window.open(
            'https://drive.google.com/file/d/18hmm6nZSjbGyke613HjBvR0fjToX1aZE/view?usp=sharing',
            '_blank'
        );
    };

    return (
        <div className="relative min-h-screen flex flex-col items-center justify-center">
            
            <div
                className="fixed inset-0 z-0 animate-fade-in"
                style={{
                    background: "linear-gradient(to right, rgba(0,0,0,1), rgba(0,0,0,0.7))",
                    minHeight: "100vh",
                    width: "100vw",
                }}
            />
            
            <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center py-8 animate-fade-in-slow">

            <section className="w-full flex flex-col-reverse lg:flex-row items-center justify-between animate-fade-in-up transition-all duration-700">
                <div className="flex-1 flex flex-col items-center lg:items-end text-center lg:text-right space-y-6 px-4 transition-all duration-1000 animate-slide-up">
                    <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-indigo-300 drop-shadow-lg break-words">
                        Web Developer
                        <span className="text-orange-400 mx-1">|</span>
                        Cybersecurity Specialist
                        <span className="text-orange-400 mx-1">|</span>
                        AI/ML Enthusiast
                    </h1>
                    <span className="text-sm sm:text-lg md:text-xl lg:text-2xl text-white font-medium max-w-full">
                        Hi, I'm <span className="text-orange-300 font-bold">Manish Prasad Gupta</span> from Meghalaya, India
                    </span>
                    <Link
                        className="inline-flex items-center gap-2 px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-lg font-semibold text-white bg-gradient-to-r from-orange-500 to-pink-500 rounded-xl shadow-lg hover:from-orange-600 hover:to-red-500 focus:ring-4 focus:ring-orange-400 transition-all backdrop-blur-md border border-orange-300"
                        to=""
                        onClick={handleDownload}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fff">
                            <path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z"/>
                        </svg>
                        My Resume
                    </Link>
                </div>
                <div className="flex-1 flex justify-center items-center mb-8 lg:mb-0 transition-all duration-1000 animate-image-slide-in-right">
                    <div className="rounded-3xl shadow-2xl border-4 border-white/30 backdrop-blur-xl bg-white/10 p-2 group">
                        <img
                            className="rounded-2xl w-48 sm:w-64 md:w-80 object-cover transition-transform duration-700 ease-in-out group-hover:scale-105 group-hover:shadow-2xl group-hover:rotate-2"
                            src="https://res.cloudinary.com/mnisprsd/image/upload/v1735478072/me1_ldwgqu.jpg"
                            alt="Manish Prasad Gupta"
                        />
                    </div>
                </div>
            </section>

                <section className="w-full mt-12 max-w-6xl animate-fade-in-up transition-all duration-700">
                    <h2 className="text-3xl sm:text-4xl font-bold text-indigo-200 text-center mb-10 tracking-tight drop-shadow-lg">
                        My Experience
                    </h2>
                    <div className="flex flex-col md:flex-row gap-6">
                        <div className="flex-1 rounded-3xl bg-white/20 backdrop-blur-md border border-white/20 shadow-xl p-8 hover:scale-105 hover:bg-white/30 transition-all duration-200">
                            <h3 className="text-xl font-semibold text-orange-400 mb-3 flex items-center gap-1">
                                <span role="img" aria-label="web">💻</span> Web Development
                            </h3>
                            <p className="text-gray-200">
                                I have over a year of experience in web development, with a strong foundation in TypeScript, JavaScript, ReactJS & NextJS and have built various small projects that showcase my skills. Currently, I'm deepening my expertise by focusing on backend development to become a well-rounded full-stack developer.
                            </p>
                        </div>
                        <div className="flex-1 rounded-3xl bg-white/20 backdrop-blur-md border border-white/20 shadow-xl p-8 hover:scale-105 hover:bg-white/30 transition-all duration-200">
                            <h3 className="text-xl font-semibold text-orange-400 mb-3 flex items-center gap-1">
                                <span role="img" aria-label="security">🛡️</span> Cybersecurity
                            </h3>
                            <p className="text-gray-200">
                                I have over 10 months of hands-on experience exploring various tools and techniques, along with a solid foundation in networking and operating systems, and I’m continuously expanding my skills in this field.
                            </p>
                        </div>
                        <div className="flex-1 rounded-3xl bg-white/20 backdrop-blur-md border border-white/20 shadow-xl p-8 hover:scale-105 hover:bg-white/30 transition-all duration-200">
                            <h3 className="text-xl font-semibold text-orange-400 mb-3 flex items-center gap-1">
                                <span role="img" aria-label="ai">🤖</span> AI/ML
                            </h3>
                            <p className="text-gray-200">
                                Currently exploring Artificial Intelligence and Machine Learning, focusing on understanding core concepts, algorithms, and real-world applications. Eager to apply AI/ML in cybersecurity and web development to build intelligent and secure solutions.
                            </p>
                        </div>
                    </div>
                </section>

            </div>

            <style>
                {`
                @keyframes fade-in {
                  from { opacity: 0; }
                  to { opacity: 1; }
                }
                .animate-fade-in {
                  animation: fade-in 1s ease both;
                }
                .animate-fade-in-slow {
                  animation: fade-in 2s ease both;
                }
                @keyframes slide-up {
                  from { opacity: 0; transform: translateY(30px);}
                  to { opacity:1; transform: translateY(0);}
                }
                .animate-slide-up {
                  animation: slide-up 1s 0.3s cubic-bezier(0.23, 1, 0.32, 1) both;
                }
                @keyframes fade-in-up {
                  0% { opacity: 0; transform: translateY(40px);}
                  100% { opacity:1; transform: translateY(0);}
                }
                .animate-fade-in-up {
                  animation: fade-in-up 1.2s 0.5s cubic-bezier(0.23, 1, 0.32, 1) both;
                }
                @keyframes image-slide-in-right {
                  from { opacity: 0; transform: translateX(80px);}
                  to { opacity:1; transform: translateX(0);}
                }
                .animate-image-slide-in-right {
                  animation: image-slide-in-right 1.2s 0.3s cubic-bezier(0.23, 1, 0.32, 1) both;
                }
                `}
            </style>
        </div>
    );
}