import React from 'react'
import PigGame from './Card/PigGame'
import SnakeGame from './Card/SnakeGame'
import TodoList from './Card/TodoList'
import AnanymousFeedback from './Card/AnanymousFeedback'
import FrontendDesign from './Card/FrontendDesign'
import EcommerceElectronics from './Card/EcommerceElectronics'
import Auth from './Card/Auth'
import BlinkTacToe from './Card/BlinkTacToe'

function Projects() {
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
      <div className="relative w-full min-h-screen py-10 px-4 flex flex-col items-center bg-gradient-to-br from-indigo-300 via-white to-pink-200 overflow-hidden animate-fade-in-slow">
        <div className="absolute top-0 left-0 w-full h-full -z-10 pointer-events-none">
          <div className="absolute bg-pink-200 rounded-full opacity-40 w-72 h-72 -left-24 -top-24 blur-2xl transition-all duration-1000 animate-float-slow"></div>
          <div className="absolute bg-indigo-300 rounded-full opacity-30 w-96 h-96 -right-32 top-1/2 -translate-y-1/2 blur-2xl transition-all duration-1000 animate-float"></div>
          <div className="absolute bg-orange-100 rounded-full opacity-40 w-48 h-48 right-10 bottom-10 blur-xl transition-all duration-1000 animate-float-reverse"></div>
        </div>
        <h2 className="text-4xl font-extrabold text-indigo-800 mb-10 tracking-tight drop-shadow-lg transition-all duration-700 animate-slide-up">
          My <span className="text-orange-500">Skills & Projects</span>
        </h2>
        {/* Main project grid with fade-in-up animation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl mb-10 items-stretch transition-all duration-700 animate-fade-in-up">
          <div className="h-full flex transition-transform duration-500 hover:scale-105"><EcommerceElectronics /></div>
          <div className="h-full flex transition-transform duration-500 hover:scale-105"><BlinkTacToe /></div>
          <div className="h-full flex transition-transform duration-500 hover:scale-105"><Auth /></div>
          <div className="h-full flex transition-transform duration-500 hover:scale-105"><AnanymousFeedback /></div>
          <div className="h-full flex transition-transform duration-500 hover:scale-105"><FrontendDesign /></div>
          <div className="h-full flex transition-transform duration-500 hover:scale-105"><PigGame /></div>
          <div className="h-full flex transition-transform duration-500 hover:scale-105"><TodoList /></div>
          <div className="h-full flex transition-transform duration-500 hover:scale-105"><SnakeGame /></div>
        </div>
        {/* Coming soon section */}
        <div className="flex flex-col items-center mt-8">
          <span className="inline-flex items-center px-6 py-2 bg-indigo-600 text-white rounded-full text-lg font-semibold shadow-lg animate-pulse">
            <svg className="w-5 h-5 mr-2 animate-bounce" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 20c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z" />
            </svg>
            More projects coming soon...
          </span>
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
  )
}

export default Projects