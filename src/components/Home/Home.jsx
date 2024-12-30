import React from 'react'
import {Link} from 'react-router-dom'

export default function Home() {
    const handleDownload = (e) => {
        e.preventDefault(); // Prevent <Link> navigation

        // Create a temporary anchor tag to trigger the download
        const link = document.createElement('a');
        link.href = 'https://drive.google.com/file/d/1FumrJZuv2tvYC-4ZMMRKLlM_bm8-UHFj/view?usp=drive_link'; // Path to your file in the public folder
        link.download = 'https://drive.google.com/file/d/1FumrJZuv2tvYC-4ZMMRKLlM_bm8-UHFj/view?usp=drive_link'; // File name for download
        link.click(); // Trigger the download
    };
    return (
        <div 
            className="mx-auto w-full max-w-7xl relative " 
           
            >
            <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
                <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full ">
                    
                    <img className="w-96" src="https://res.cloudinary.com/mnisprsd/image/upload/v1735478072/me1_ldwgqu.jpg" alt="image1" />
                </div>
                <div className="relative z-10 max-w-screen-xl px-4  pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
                    <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">
                        <h1 className="text-4xl font-bold sm:text-3.5xl text-indigo-400">
                            Web Developer & Aspiring Cybersecurity Specialist
                            <span 
                            className="hidden text-gray-600 sm:block text-2xl"
                             
                            >Hi, I'm Manish Prasad Gupta From Meghalaya, India</span>
                        </h1>

                        <Link
                            className="inline-flex text-white items-center px-6 py-3 font-medium backdrop-blur-10 bg-[#f65733] rounded-lg hover:bg-orange-400"
                            to="" onClick={handleDownload}>
                            
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z"/></svg>
                            
                            &nbsp; My Resume
                        </Link>
                    </div>
                </div>

               
            </aside>


            <h1 className='text-4xl font-bold p-4 text-indigo-400 font-'>My Experience</h1>

             {/* Main container */}
            <div className="container mx-auto p-5 bg-indigo-500">
                {/* Flex container for side-by-side layout */}
            <div className="flex space-x-4 ">  
                <div className="flex-1 bg-slate-700 p-4 text-white
                 rounded-lg shadow-md transition hover:bg-red-500 duration-50 ease-in-out ">
                {/* First inner container */}
                    <h2 className="text-lg font-bold">Web Development</h2>
                    <p>"I have over a year of experience in web development, with a strong foundation in TypeScript, JavaScript, ReactJS & NextJS and have built various small projects that showcase my skills. Currently, I'm deepening my expertise by focusing on backend development to become a well-rounded full-stack developer."</p>
                </div>
                <div className="flex-1 bg-slate-700 p-4 text-white
                rounded-lg shadow-md hover:bg-red-500 transition duration-50 ease-in-out
                "> {/* Second inner container */}
                    <h2 className="text-lg font-bold">Cybersecurity</h2>
                    <p>"I have over 10 months of hands-on experience exploring various tools and techniques, along with a solid foundation in networking and operating systems, and I’m continuously expanding my skills in this field."</p>
                </div>
                
            </div>
        </div>

            <h1 className="text-center text-2xl sm:text-5xl py-10 font-medium"></h1>
        </div>
    );
}
