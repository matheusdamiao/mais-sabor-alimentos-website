import React from 'react'
import foto from './../../images/foto-engenharia.webp'

const EngineerSectionHomePage = () => {
  return (
    <div className='relative'>
        <div className='w-full max-w-6xl mx-auto my-[100px] lg:my-[150px]'>
            <div className=' flex flex-col items-end max-w-[700px] gap-[40px] lg:gap-[50px] lg:ml-auto lg:mr-[50px] lg:h-[650px] h-full justify-center '>
                <h3 className='px-6 lg:px-0 text-[42px] lg:text-[70px] text-left z-50 lg:text-right'>Da engenharia à mesa</h3>
                <p className='px-6 z-50 max-w-[500px] text-left lg:text-right text-base lg:text-xl text-[#33302C]'>
                Desenvolvemos todas as plantas dos refeitórios e cozinha da unidade. Layout e as especificações técnicas de hidráulica, elétrica, exaustão. Também acompanhamos a obra e finalizamos com a montagem dos equipamentos e uma pré-inauguração. 
                </p>
                <img src={foto} className='block lg:hidden w-full ' alt="" />

            </div>

        </div>
        <img src={foto} className='absolute lg:block hidden left-0 top-0 lg:max-w-[700px]' alt="" />

    </div>
  )
}

export default EngineerSectionHomePage
