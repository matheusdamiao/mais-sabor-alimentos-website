import React from 'react'
import bg from './../../images/hero-bg-contato.webp'
import MenuHome from '../Menu'
import shadow from './../../images/hero-text-shadow.png'

const HeroSectionContato = () => {
  return (
    <div className='relative'>
        <img src={bg} className='absolute top-0 left-0 w-full h-[700px] lg:h-[700px] object-cover object-[35%] '/>
        <MenuHome/>
        <div className='px-6 relative flex items-center justify-center gap-[50px] lg:gap-[30px] flex-col h-[700px] lg:h-[700px] max-w-[1200px] w-full mx-auto'>
            <img src={shadow} className='absolute w-[400px] h-[700px] lg:w-[1200px] lg:h-[600px] left-0' />
            <h1 className='text-[30px] lg:text-[40px] text-white z-30 max-w-[600px] text-center'>Seja você também um cliente <span className='text-[#EFD93F]'> Mais Sabor</span> </h1>
            <h4 className='text-[#F2F2F2] text-lg lg:text-2xl max-w-[750px] text-center z-50'> Entre em contato conosco e leve bem-estar e saúde à mesa dos seus colaboradores.</h4>
        </div>

    </div>
  )
}

export default HeroSectionContato
