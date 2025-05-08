import React, { useState } from 'react';

export default function Contact() {
    const scriptURL = 'https://script.google.com/macros/s/AKfycbym219RngTW_ImRy5GhFOTbI5bstlsrqrw5k0ll3oZTISNjafSFyLoEIF0ehg2eY7eCCQ/exec';
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        setSuccess(false);
        const form = e.target;

        try {
            const response = await fetch(scriptURL, {
                method: 'POST',
                body: new FormData(form)
            });
            if (response.ok) {
                setSuccess(true);
                form.reset();
            } else {
                setError('Failed to submit the form.');
            }
        } catch (err) {
            setError('Something went wrong. Please try again.');
        }
        setLoading(false);
    };

    return (
        <div>
            {/* Animated background overlay with fade-in */}
            <div
                className="fixed inset-0 z-0 animate-fade-in"
                style={{
                    background: "linear-gradient(to right, rgba(0,0,0,1), rgba(0,0,0,0.7))",
                    minHeight: "100vh",
                    width: "100vw",
                }}
            />
            <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-400 via-indigo-200 to-pink-200 px-3 py-10 animate-fade-in-slow">
                {/* Glassmorphic Card */}
                <div className="w-full max-w-5xl bg-white/60 shadow-2xl rounded-3xl flex flex-col md:flex-row overflow-hidden border border-indigo-300 backdrop-blur-[8px] relative z-20 animate-fade-in-up transition-all duration-700">
                    {/* Info Section */}
                    <div className="w-full md:w-1/2 p-10 bg-indigo-700 flex flex-col justify-center text-white relative transition-all duration-1000 animate-slide-up">
                        <h2 className="text-4xl font-extrabold mb-4 flex items-center">
                            <span className="inline-block mr-2">Contact</span>
                            <span className="inline-block animate-bounce">💬</span>
                        </h2>
                        <p className="text-lg mb-8 text-indigo-100">
                            I'd love to hear from you! Fill out the form to start a conversation.
                        </p>
                        <div className="flex flex-col gap-6 text-base">
                            {/* Location */}
                            <div className="flex items-center">
                                <a
                                    href="https://maps.app.goo.gl/Pghu5ZHNPEfdYew7A"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-shrink-0"
                                    title="View Location"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" height="28" viewBox="0 -960 960 960" width="28" fill="#fbbf24">
                                        <path d="M480.06-486.67q30.27 0 51.77-21.56 21.5-21.55 21.5-51.83 0-30.27-21.56-51.77-21.55-21.5-51.83-21.5-30.27 0-51.77 21.56-21.5 21.55-21.5 51.83 0 30.27 21.56 51.77 21.55 21.5 51.83 21.5ZM480-168q129.33-118 191.33-214.17 62-96.16 62-169.83 0-114.86-73.36-188.1-73.36-73.23-179.97-73.23T300.03-740.1q-73.36 73.24-73.36 188.1 0 73.67 63 169.83Q352.67-286 480-168Zm0 88Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T720-160H240Z"/>
                                    </svg>
                                </a>
                                <span className="ml-4">Shillong, Meghalaya, 7943003</span>
                            </div>
                            {/* Phone */}
                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" height="28" viewBox="0 -960 960 960" width="28" fill="#fbbf24">
                                    <path d="M796-120q-119 0-240-55.5T333-333Q231-435 175.5-556T120-796q0-18.86 12.57-31.43T164-840h147.33q14 0 24.34 9.83Q346-820.33 349.33-806l26.62 130.43q2.05 14.9-.62 26.24-2.66 11.33-10.82 19.48L265.67-530q24 41.67 52.5 78.5T381-381.33q35 35.66 73.67 65.5Q493.33-286 536-262.67l94.67-96.66q9.66-10.34 23.26-14.5 13.61-4.17 26.74-2.17L806-349.33q14.67 4 24.33 15.53Q840-322.27 840-308v144q0 18.86-12.57 31.43T796-120ZM233-592l76-76.67-21-104.66H187q3 41.66 13.67 86Q211.33-643 233-592Zm365.33 361.33q40.34 18.34 85.84 29.67 45.5 11.33 89.16 13.67V-288l-100-20.33-75 77.66ZM233-592Zm365.33 361.33Z"/>
                                </svg>
                                <span className="ml-4">+91 8732056328</span>
                            </div>
                            {/* Email */}
                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" height="28" viewBox="0 -960 960 960" width="28" fill="#fbbf24">
                                    <path d="M146.67-160q-27 0-46.84-19.83Q80-199.67 80-226.67v-506.66q0-27 19.83-46.84Q119.67-800 146.67-800h666.66q27 0 46.84 19.83Q880-760.33 880-733.33v506.66q0 27-19.83 46.84Q840.33-160 813.33-160H146.67ZM480-454.67 146.67-670v443.33h666.66V-670L480-454.67Zm0-66.66 330.67-212H150l330 212ZM146.67-670v-63.33V-226.67-670Z"/>
                                </svg>
                                <span className="ml-4">manishprasad7173@gmail.com</span>
                            </div>
                        </div>
                        <div className="mt-10 text-sm text-indigo-200">
                            <span>Available: </span>
                            <span className="font-semibold">09:00 AM – 06:00 PM IST</span>
                        </div>
                    </div>
                    {/* Contact Form Section */}
                    <div className="w-full md:w-1/2 p-10 flex items-center bg-white/80 transition-all duration-1000 animate-slide-up">
                        <form className="w-full space-y-6" onSubmit={handleSubmit} autoComplete="off">
                            <h3 className="text-2xl font-bold text-indigo-900 mb-4">Send a Message</h3>
                            <div>
                                <label htmlFor="name" className="sr-only">Full Name</label>
                                <input
                                    type="text"
                                    name="Name"
                                    id="name"
                                    placeholder="Full Name"
                                    required
                                    className="block w-full rounded-lg border border-gray-300 py-3 px-4 bg-white text-gray-700 font-medium shadow-sm focus:border-orange-400 focus:ring-2 focus:ring-orange-200 transition"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="sr-only">Email</label>
                                <input
                                    type="email"
                                    name="Email"
                                    id="email"
                                    placeholder="Email Address"
                                    required
                                    className="block w-full rounded-lg border border-gray-300 py-3 px-4 bg-white text-gray-700 font-medium shadow-sm focus:border-orange-400 focus:ring-2 focus:ring-orange-200 transition"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="sr-only">Your Message</label>
                                <textarea
                                    name="Message"
                                    id="message"
                                    rows={5}
                                    placeholder="Your Message"
                                    required
                                    className="block w-full rounded-lg border border-gray-300 py-3 px-4 bg-white text-gray-700 font-medium shadow-sm focus:border-orange-400 focus:ring-2 focus:ring-orange-200 transition resize-none"
                                />
                            </div>
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white font-bold py-3 px-6 rounded-lg transition ease-in-out duration-300 shadow-md focus:outline-none focus:ring-2 focus:ring-orange-300 focus:ring-offset-2"
                            >
                                {loading ? (
                                    <span className="flex items-center justify-center">
                                        <svg className="animate-spin h-5 w-5 mr-2 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
                                        </svg>
                                        Sending...
                                    </span>
                                ) : (
                                    'Send'
                                )}
                            </button>
                            {/* Success / Error Messages */}
                            {success && <p className="text-green-700 bg-green-100 px-4 py-2 rounded-lg mt-2">Thank you! Your message has been sent.</p>}
                            {error && <p className="text-red-700 bg-red-100 px-4 py-2 rounded-lg mt-2">{error}</p>}
                        </form>
                    </div>
                </div>
                {/* Background Decorative Circles */}
                <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden pointer-events-none">
                    <div className="absolute bg-pink-200 rounded-full opacity-40 w-72 h-72 -left-24 -top-24 blur-3xl animate-float-slow"></div>
                    <div className="absolute bg-indigo-300 rounded-full opacity-30 w-96 h-96 -right-32 top-1/2 -translate-y-1/2 blur-2xl animate-float"></div>
                    <div className="absolute bg-orange-100 rounded-full opacity-50 w-48 h-48 right-10 bottom-10 blur-2xl animate-float-reverse"></div>
                </div>
            </div>
            {/* Tailwind custom animation keyframes */}
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