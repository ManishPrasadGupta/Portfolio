import React from 'react'

export default function About() {
    return (
        <div className="py-16 bg-indigo-300">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src="https://nitm.ac.in/nitmeghalaya/ckfinder/userfiles/images/Admin.jpg"
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                            About Me
                        </h2>
                        <p className="mt-6 text-gray-600">
                        "I'm currently in my third year of B.Tech at the National Institute of Technology Meghalaya, where I'm combining my love for technology with hands-on learning. My primary areas of passion are web development and cybersecurity, where I am actively working on building efficient, secure, and user-friendly applications. With over a year of web development experience and a growing skill set in cybersecurity, I aim to create solutions that are both functional and secure."
                        </p>
                        {/* <p className="mt-4 text-gray-600">
                            Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at?
                            Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia. */}
                        {/* </p> */}
                    </div>
                </div>
            </div>
        </div>
    );
}
