import React from 'react'
import elf from '../assets/elf.png'
import logo from '../assets/elf_vault_logo.jfif'
import blue from '../assets/blue girl with wand.png'
import singer from '../assets/singer_pixel-removebg-preview.png'

const Footer = () => {
  return (
    <div className='bg-black/50 py-10px flex flex-col md:flex-row  justify-between w-full'>
      <div className='Left flex justify-center ml-0'>
        <div>
          <img src={logo} alt="" className='rounded-full h-10 mt-2.5'/>
        </div>
        <span>&nbsp;</span>
        <div className='center text-white flex items-center justify-center'>                 
            <div className=' text-[#69d84f] font-pixel font-bold '>Elf's</div>
            <span>&nbsp;</span>
            <div className='font-pixel font-bold'>vault</div>                  
        </div>
        <div>
          <img src={elf} alt="" className='h-15'/>
        </div>
        
      </div>
      <div className='Right'>
        <div className='center text-white flex items-center justify-center font-pixel font-bold'>
            <div className='flex'>
                <img src={blue} alt="" className='h-15'/>
                <a href="https://www.linkedin.com/in/ankit-kumar-b84889347/" target="_blank" className='mt-auto mb-auto text-sm'>Contact</a>
            </div>
           
            <div className='flex'>
                <img src={singer} alt="" className='h-15'/>
                <a href="https://portofolio-website-two-psi.vercel.app/" target="_blank" className='mt-auto mb-auto text-sm'>About me</a>
            </div>
        </div>
        
        
      </div>
    </div>
  )
}

export default Footer
