import React from 'react';

export default function About() {
    return (
        <div>
            
            <div
                className="fixed inset-0 z-0 animate-fade-in"
                style={{
                    background: "linear-gradient(to right, rgba(0,0,0,1), rgba(0,0,0,0.7))",
                    minHeight: "100vh",
                    width: "100vw",
                }}
            />
            <section className="w-full bg-[#bfcaff] py-16 flex items-center justify-center min-h-[60vh] relative z-10 animate-fade-in-slow">
                <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-7xl gap-10 px-4 animate-fade-in-up transition-all duration-700">
                    
                    <div className="w-full md:w-1/2 flex justify-center transition-all duration-1000 animate-slide-up">
                        <img
                            src="https://nitm.ac.in/nitmeghalaya/ckfinder/userfiles/images/Admin.jpg"
                            alt="NIT Meghalaya Main Building"
                            className="w-full max-w-2xl h-72 md:h-96 rounded-xl object-cover shadow-xl border-4 border-white"
                        />
                    </div>
                    
                    <div className="w-full md:w-1/2 flex flex-col justify-center transition-all duration-1000 animate-slide-up">
                        <h2 className="text-4xl font-extrabold text-gray-900 mb-4">About Me</h2>
                        <p className="text-lg text-gray-800">
                            "I'm currently in my third year of B.Tech at the National Institute of Technology Meghalaya, where I'm combining my love for technology with hands-on learning. My primary areas of passion are web development and cybersecurity, where I am actively working on building efficient, secure, and user-friendly applications. With over a year of web development experience and a growing skill set in cybersecurity, I aim to create solutions that are both functional and secure."
                        </p>
                    </div>
                </div>
               
                <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden pointer-events-none">
                    <div className="absolute bg-pink-200 rounded-full opacity-40 w-72 h-72 -left-24 -top-24 blur-3xl animate-float-slow"></div>
                    <div className="absolute bg-indigo-300 rounded-full opacity-30 w-96 h-96 -right-32 top-1/2 -translate-y-1/2 blur-2xl animate-float"></div>
                    <div className="absolute bg-orange-100 rounded-full opacity-50 w-48 h-48 right-10 bottom-10 blur-2xl animate-float-reverse"></div>
                </div>
            </section>


            
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
                @keyframes float {
                  0%, 100% { transform: translateY(0); }
                  50% { transform: translateY(-20px); }
                }
                .animate-float {
                  animation: float 7s ease-in-out infinite;
                }
                @keyframes float-reverse {
                  0%, 100% { transform: translateY(0); }
                  50% { transform: translateY(20px); }
                }
                .animate-float-reverse {
                  animation: float-reverse 8s ease-in-out infinite;
                }
                @keyframes float-slow {
                  0%, 100% { transform: translateY(0); }
                  50% { transform: translateY(-10px); }
                }
                .animate-float-slow {
                  animation: float-slow 10s ease-in-out infinite;
                }
                `}
            </style>
        </div>
    );
}