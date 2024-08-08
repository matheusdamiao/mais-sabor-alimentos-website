import React from 'react'
import foto from './../../images/foto-cardapio-section.webp'

const CardapioSectionHomePage = () => {
  return (
    <div className='max-w-6xl w-full mx-auto my-[150px]'>
      
        <div className='flex justify-center gap-[50px] lg:gap-[100px] lg:flex-nowrap flex-wrap'>
            <div className='flex px-6 flex-col'>
                <div className='flex flex-col'>
                    <h3 className='text-[58px] flex items-center lg:text-[70px] text-[#33302C]'><span className='text-[#E22E46] text-[90px]'>+</span>Saúde</h3>
                    <h3 className='text-[58px] flex items-center lg:text-[70px]  text-[#33302C] leading-[0px] lg:leading-4'><span className='text-[#E22E46] text-[90px]'>+</span>Sabor</h3>
                </div>
                <div className='pt-[80px] lg:max-w-[350px] flex flex-col gap-8 text-[#33302C]'>
                    <p className='text-base lg:text-xl'>
                    O cliente determina o escopo inicial dos cardápios em conjunto com nossa área de qualidade, levando em consideração as necessidades nutricionais e hábitos alimentares dos comensais.
                    </p>
                    <p className='text-base lg:text-xl'>Todos os cardápios são elaborados em parceria com <span className='font-bold'>cozinheiros e nutricionistas</span>  que harmonizam sabor, saúde e prazer.</p>
                </div>

            </div>
            <img src={foto} alt="" className='lg:max-w-[550px]' />
        </div>
    </div>
  )
}

export default CardapioSectionHomePage
