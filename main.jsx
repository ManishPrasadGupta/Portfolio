import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './src/App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './src/Layout.jsx'
import Home from './src/components/Home/Home.jsx'
import About from './src/components/About/About.jsx'
import Contact from './src/components/Contact/Contact.jsx'
import User from './src/components/User/User.jsx'
import Projects from './src/components/Projects/Projects.jsx'



const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />, 
    children: [
      {
        path:"",
        element: <Home />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "contact",
        element: <Contact />
      },
      {
        path: "user/:userid",
        element: <User />
      },
      {
        path: "projects",
        element: <Projects />
      }
      
    ]
  }
])


// const router = createBrowserRouter([
//   createRoutesFromElements(
//     <Route path='/' element={<Layout />}>
//       <Route path='' element={<Home />} />
//       <Route path='about' element={<About />} />
//       <Route path='contact' element={<Contact />} />
//     </Route>
//   )
// ])

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider  router={router}/>
  </StrictMode>,
)
