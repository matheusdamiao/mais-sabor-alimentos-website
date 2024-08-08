import React from 'react'
import foto from './../../images/team-section.webp'
import check from './../../images/icons/red-check.svg'

const TeamHomePage = () => {
  return (
    <div className='max-w-6xl w-full mx-auto my-[150px]'>
      
        <div className='flex justify-center  lg:flex-nowrap flex-wrap'>
            <div className='flex flex-col'>
                <div className='flex flex-col'>
                    <h3 className='px-6  text-[42px] flex items-center lg:text-[70px] text-[#33302C] leading-tight'>Uma equipe completa </h3>
                </div>
                <div className='py-[40px] lg:max-w-[450px] flex flex-col gap-8 text-[#33302C]'>
                    <p className='px-6 text-base lg:text-xl'>
                    Mantemos uma equipe de coordenação composta por nutricionistas especializados, que exercem o papel de coordenador do projeto, e um gerente de contratos regional.
                    </p>
                   <div className='px-6 flex items-center gap-4'>
                    <img src={check} alt="" />
                    <p>Cursos de capacitação e qualificação profissional no setor de alimentação</p>
                   </div>
                </div>

            </div>
            <img src={foto} alt="" className='lg:max-w-[550px]' />
        </div>
    </div>
  )
}

export default TeamHomePage
