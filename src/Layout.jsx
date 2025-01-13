import React, { useEffect, useState } from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'
import LoadingWeb from './components/LoadIngWeb/LoadingWeb';


function Layout() {

  const [isLoading, setIsLoading] = useState(true);

   useEffect(() => {
     setTimeout(() => {
       setIsLoading(false);
     },2000);
   },[]);

   return isLoading ? (
     <LoadingWeb />
   ) : (
     <>
       <Header />
       <main>
         <Outlet />
       </main>
       <Footer />
     </>
   );
}

export default Layout;