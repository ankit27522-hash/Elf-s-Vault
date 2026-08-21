import React from 'react'
import wizard from '../assets/wizard.png'
import gitlogo from '../assets/github.svg'

const Bottom = () => {
  return (
    <div className='bg-black/50  flex justify-between mb-0 bottom-0  w-full'>
      <div className='left w-[8%]'>
        
      </div>
      <div className='center text-white my-auto'>Made with ❤️ by Ankit</div>
      <div className='right flex'>
          <img src={wizard} alt="" className='h-15'/>
          <a href="https://github.com/ankit27522-hash/" target="_blank" > 
          <button className='text-white bg-green-700 my-auto mx-2 rounded-full flex items-center ring-white ring-1 cursor-pointer'> 
              <img className=' w-10 p-1' src={gitlogo} alt="github logo" />
              <span className='font-bold px-2'>GitHub</span>
              
          </button>
          </a>
      </div>
    </div>
  )
}

export default Bottom
