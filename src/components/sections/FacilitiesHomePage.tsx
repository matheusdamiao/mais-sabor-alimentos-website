import React from 'react'
import pig from './../../images/icons/pig.svg'
import receipt from './../../images/icons/receipt.svg'
import hat from './../../images/icons/chef-hat.svg'
import wallet from './../../images/icons/wallet.svg'
import fork from './../../images/icons/fork-knife.svg'
import tech from './../../images/icons/tech-icon.svg'


const FacilitiesHomePage = () => {
  return (
    <div className='max-w-6xl w-full mx-auto my-[200px]'>
       
       <div className='flex flex-col px-6'>
            <div className='flex flex-col gap-8'>
                <h2 className='text-[#33302C] text-[28px] text-center lg:text-[36px] '>
                Facilidade e Eficiência para Sua Empresa
                </h2>
                <p className='max-w-[686px] w-full mx-auto text-[#363636] text-center text-base lg:text-xl' >
                    <span className='font-semibold' >Desde a compra de alimentos até a logística e a supervisão nutricional</span>,
                com a Mais Sabor sua empresa economiza e ainda ganha em praticidade, qualidade e saúde. </p>
            </div> 

            <div className='grid grid-cols-1 lg:grid-cols-2 pt-16 mx-auto gap-x-8 gap-y-6'>
                <div className='flex items-center gap-4'>
                    <img src={pig} alt="ícone"  className='flex-shrink-0 flex-0'/>
                    <p className='text-[#33302C] text-base font-medium max-w-[380px]'>Menor investimento em infraestrutura</p>
                </div>
                <div className='flex items-center gap-4'>
                    <img src={receipt} alt="ícone"  className='flex-shrink-0 flex-0'/>
                    <p className='text-[#33302C] text-base font-medium max-w-[380px]'>Cardápios elaborados com supervisão de nutricionistas</p>
                </div>
                <div className='flex items-center  gap-4'>
                    <img src={hat} alt="ícone"  className='flex-shrink-0 flex-0'/>
                    <p className='text-[#33302C] text-base font-medium max-w-[380px]'>Experts em refeição Corporativa com Qualidade e Segurança Alimentar</p>
                </div>
                <div className='flex items-center  gap-4'>
                    <img src={wallet} alt="ícone"  className='flex-shrink-0 flex-0'/>
                    <p className='text-[#33302C] text-base font-medium max-w-[380px]'>Facilidade para as empresas controlarem seus orçamentos</p>
                </div>
                <div className='flex items-center gap-4'>
                    <img src={fork} alt="ícone"  className='flex-shrink-0 flex-0'/>
                    <p className='text-[#33302C] text-base font-medium max-w-[380px]'>Desfrute de cardápios equilibrados, vardiados e regionais</p>
                </div>
                <div className='flex items-center  gap-4 '>
                    <img src={tech} alt="ícone"  className='flex-shrink-0 flex-0'/>
                    <p className='text-[#33302C] text-base font-medium max-w-[380px]'>Inovação constante em tecnologia na gestão alimentar</p>
                </div>
            </div>
       </div>


    </div>
  )
}

export default FacilitiesHomePage
