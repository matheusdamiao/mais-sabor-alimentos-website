import React, { useEffect, useState } from "react";
import useWindowDimensions from "../utils/useWindowDimension";
import { Link } from "gatsby";
import logoBranca from './../images/logo-branca.svg'

const MenuHome = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    let size = useWindowDimensions();
  
    useEffect(() => {
  
  
      if(size){
  
      if (size.width > 800) {
        setIsOpen(false);
      }
      }
  
  }, [size, isOpen]);
  
  
  
  const handleMenuMobile = () =>{
    setIsOpen(!isOpen)
  }
  
    return (
      <>
      <nav className='px-6 w-full h-[80px] lg:h-[100px] left-0 absolute z-40 bg-none flex items-center justify-center'>
            <div className='max-w-6xl lg:w-[250px] flex items-center gap-[30px] lg:justify-between sm:px-5 lg:px-5 xl:px-0'>
              <div className='lg:px-[20px] lg:hidden block flex-0 flex-shrink-0  mt-8'>
                <Link to="/" className='cursor-pointer'><img src={logoBranca} width={250} height={83} alt=''/></Link>
              </div>
              
              <Link to='/'><div className='lg:block hidden'><img src={logoBranca} width={250} height={83} alt='' className=''/></div></Link>
              <ul className='hidden absolute right-16 gap-[50px] sm:flex items-center'>
                <li><a href="/#inscricao" className='text-base lg:text-xl text-white  text-nowrap hover:after:w-full after:w-0 relative  hover:after:h-[4px]  after:bg-yellow hover:after:block after:transition-all after:duration-400 after:absolute after:bottom-[-10px]'>Sobre nós</a></li>
                <li><a href="/#contato" className='text-base lg:text-xl text-white  text-nowrap hover:after:w-full after:w-0 relative  hover:after:h-[4px]  after:bg-yellow hover:after:block after:transition-all after:duration-400 after:absolute after:bottom-[-10px]'>Contato</a></li>
              </ul>
            </div>
  
  
  
            {/* menu mobile */} 
        <div onClick={()=> handleMenuMobile()} className={`${isOpen ? 'bg-yellow': 'bg-yellow'} border border-white z-[9999] transition-colors  sm:hidden w-[44px] h-[44px] !flex-shrink-0 rounded-full  flex items-center justify-center gap-1 flex-col absolute right-4`}>
          <span className={`${isOpen ? 'translate-y-[3px] rotate-45 !w-[20px]' : ''} transition-transform w-[14px] h-[2px] bg-white block rounded-lg `}> </span>
          <span className={`${isOpen ? 'hidden' : ''} w-[14px] h-[2px] bg-white block rounded-lg !flex-shrink-0`}> </span>
          <span className={`${isOpen ? 'translate-y-[-3px] rotate-[-45deg] !w-[20px]' : ''} transition-transform w-[14px] h-[2px] bg-white block rounded-lg `}> </span>
        </div>
  
        {isOpen ?  
          <div className='absolute top-0 translate-x-[0px] duration-500 transition-all bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 bg-lightGray w-full h-[400px]'>
            <ul className='px-[20px] pt-[95px] flex flex-col gap-4 items-center text-white' >
              <li className='py-spacing-lg px-spacing-xl'>
                <a href='/#opremio' onClick={()=> setIsOpen(!isOpen)} className='text-primary-base-white font-semibold hover:after:w-full after:w-0 relative  hover:after:h-[4px]  after:bg-yellow hover:after:block after:transition-all after:duration-400 after:absolute after:bottom-[-10px]'>O Prêmio</a>
              </li>
              <li className='py-spacing-lg px-spacing-xl'>
                <a href='/#edicao2024' onClick={()=> setIsOpen(!isOpen)} className='text-primary-base-white font-semibold hover:after:w-full after:w-0 relative  hover:after:h-[4px]  after:bg-yellow hover:after:block after:transition-all after:duration-400 after:absolute after:bottom-[-10px]'>Edição 2024</a>
              </li>
              <li className='py-spacing-lg px-spacing-xl '>
                <a href='/#informacoes' onClick={()=> setIsOpen(!isOpen)} className='text-primary-base-white font-semibold hover:after:w-full after:w-0 relative  hover:after:h-[4px]  after:bg-yellow hover:after:block after:transition-all after:duration-400 after:absolute after:bottom-[-10px]' >Informações</a>
              </li>
              <li className='py-spacing-lg px-spacing-xl'>
                <a href='/#inscricao' onClick={()=> setIsOpen(!isOpen)} className='text-primary-base-white font-semibold hover:after:w-full after:w-0 relative  hover:after:h-[4px]  after:bg-yellow hover:after:block after:transition-all after:duration-400 after:absolute after:bottom-[-10px]'>Inscreva-se</a>
              </li>
              <li className='py-spacing-lg px-spacing-xl'>
                <a href='/#contato' onClick={()=> setIsOpen(!isOpen)} className='text-primary-base-white font-semibold hover:after:w-full after:w-0 relative  hover:after:h-[4px]  after:bg-yellow hover:after:block after:transition-all after:duration-400 after:absolute after:bottom-[-10px]'>Contato</a>
              </li>
              <li className='py-spacing-lg px-spacing-xl'>
                <a href='/login' onClick={()=> setIsOpen(!isOpen)} className='text-primary-base-white font-semibold hover:after:w-full after:w-0 relative  hover:after:h-[4px]  after:bg-yellow hover:after:block after:transition-all after:duration-400 after:absolute after:bottom-[-10px]'>Login</a>
              </li>
            </ul>
          </div>
          :
          <div className={` transition-all absolute top-0 translate-x-[-2000px] duration-500 w-full  h-[80svh]`}>
          </div>
  
        }
  
        </nav>
  
        
        </>
       
    )
  }
  
  export default MenuHome