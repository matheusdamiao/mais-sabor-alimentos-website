import React from 'react'
import logo1 from './../../images/logos/logo-1.svg'
import logo2 from './../../images/logos/logo-2.svg'
import logo3 from './../../images/logos/logo-3.svg'
import logo4 from './../../images/logos/logo-4.svg'
import logo5 from './../../images/logos/logo-5.svg'
import logo6 from './../../images/logos/logo-6.svg'
import logo7 from './../../images/logos/logo-7.svg'
import logo8 from './../../images/logos/logo-8.svg'



const Parceiros = () => {
  return (
    <div className='max-w-6xl w-full mx-auto mt-[80px]'>
        <h3 className='text-center text-[#5C5C5C] text-lg'>Empresas que Confiam em Nós</h3>
        <div className='flex gap-4 max-w-[800px] items-center justify-center mx-auto  flex-wrap mt-[60px]'>
            <img src={logo1}/>
            <img src={logo2}/>
            <img src={logo3}/>
            <img src={logo4}/>
            <img src={logo5}/>
            <img src={logo6}/>
            <img src={logo7}/>
            <img src={logo8}/>

        </div>
    </div>
  )
}

export default Parceiros
