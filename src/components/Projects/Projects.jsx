import React from 'react'
import PigGame from './Card/PigGame'
import SnakeGame from './Card/SnakeGame'
import TodoList from './Card/TodoList'
import AnanymousFeedback from './Card/AnanymousFeedback'
import FrontendDesign from './Card/FrontendDesign'

function Projects() {
  return (
    <div className="flex flex-col items-center p-6 bg-indigo-300 rounded-lg shadow-md w-full">
      <h2 className="text-2xl font-bold mb-4">My Skills</h2>
      <div className="space-x-4 lg:flex">
        <AnanymousFeedback />
        <FrontendDesign />
      </div>
      <br/> 
      <div className="space-x-4 lg:flex">
        <PigGame />
        <SnakeGame />
        <TodoList />
      </div>
      
      
      <div className="flex space-x-4">
        <h1>More projects coming soon...</h1>
      </div>
    </div>
  )
}

export default Projects
