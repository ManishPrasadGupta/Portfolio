import React from 'react'
import PigGame from './Card/PigGame'

function Projects() {
  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 rounded-lg shadow-md w-full">
      <h2 className="text-2xl font-bold mb-4">My Skills</h2>
      <div className="flex space-x-4">
        <PigGame />
        <PigGame />
      </div>
      <div className="flex space-x-4">
        
      </div>
    </div>
  )
}

export default Projects
