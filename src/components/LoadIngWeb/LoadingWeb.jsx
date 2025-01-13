import React from 'react'
import { HashLoader } from 'react-spinners';
function LoadingWeb() {
    return (
        <div className="flex items-center justify-center h-screen backdrop-blur-xl">
            <div>
               <HashLoader color='#60b2ae' />
            </div>
        </div>
    );
};

export default LoadingWeb;
