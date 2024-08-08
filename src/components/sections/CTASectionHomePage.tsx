import React from 'react'
import foto from './../../images/fundo-ctasection.webp'
import { Link } from 'gatsby'

const CTASectionHomePage = () => {
  return (
    <div className='relative h-[600px] '>
        <div className='flex px-6 flex-col gap-[50px] items-center justify-center max-w-6xl h-[70%] w-full mx-auto'>
            <h3 className=' z-40 text-white text-[28px] lg:text-[38px] max-w-[950px] text-center'>Mais que uma refeição, <br />uma experiência diária de bem-estar</h3>
            <Link to='/contato' className='bg-[#EFD93F] px-4 z-50 font-semibold text-[#020202] py-3 w-full max-w-[350px] flex items-center justify-center'> Quero ser cliente Mais Sabor</Link>
        </div>
        <img src={foto} alt="" className='absolute w-full h-[600px] object-cover top-0'/>
      
    </div>
  )
}

export default CTASectionHomePage
