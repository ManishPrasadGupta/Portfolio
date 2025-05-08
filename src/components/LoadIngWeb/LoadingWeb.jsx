import React from 'react'
import { HashLoader } from 'react-spinners';
function LoadingWeb() {
    return (
        <div className="flex items-center justify-center h-screen backdrop-blur-xl">
            <div className="fixed inset-0 z-0"
                style={{
                    background: "linear-gradient(to right, rgba(0,0,0,1), rgba(0,0,0,0.7))",
                    minHeight: "100vh",
                    width: "100vw",
                }}
            />
            <div>
               <HashLoader color='#60b2ae' />
            </div>
        </div>
    );
};

export default LoadingWeb;
