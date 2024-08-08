import React from 'react'
import foto from './../../images/foto-about.webp'

const AboutHomePage = () => {
  return (
    <div className='max-w-6xl w-full mx-auto my-[150px]'>

      <div className='flex gap-10 flex-wrap flex-col lg:flex-nowrap lg:flex-row px-6'>
        <div className='flex flex-col gap-[30px] max-w-[580px] '>
            <h2 className='text-[#33302C] text-[28px] lg:text-[36px] '>Somos Especialistas em Alimentação Corporativa</h2>
            <p className='text-justify lg:w-[95%] text-[#363636] text-base lg:text-xl'>A MAIS SABOR é especializada em alimentação corporativa, proporcionando ambientes personalizados para atender às necessidades específicas dos colaboradores das empresas parceiras.</p>
            <a className='bg-[#EFD93F] hidden px-4 font-semibold text-[#020202] py-3 max-w-[300px] lg:flex items-center justify-center' href=""> Conheça a Mais Sabor</a>
        </div>
        <img src={foto} alt="" className='object-cover ' />
        <a className='bg-[#EFD93F] lg:hidden px-4 font-semibold text-[#020202] py-3 max-w-[300px] flex items-center justify-center' href=""> Conheça a Mais Sabor</a>
      </div>


    </div>
  )
}

export default AboutHomePage
