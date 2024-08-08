import React from 'react'
import logo from './../../images/logo-branca-variacao.svg'
import insta from './../../images/icons/instagram.svg'
import face from './../../images/icons/facebook.svg'
import linkedin from './../../images/icons/linkedin.svg'
import { Link } from 'gatsby'


const Footer = () => {
  return (
    <div className='w-full flex flex-col bg-[#2F2F2F]'>
        <div className='px-6 grid py-[50px] lg:py-0 grid-cols-1 lg:grid-cols-5 gap-x-8 max-w-6xl w-full h-full lg:h-[450px] gap-y-8 lg:pt-[150px]  mx-auto'>
            <img src={logo} alt='' className='h-[100px]'/>
            <div className='flex flex-col col-span-1 h-[100px] gap-[10px]'>
                <h5 className='text-white font-bold'>SITE</h5>
                <ul className='grid grid-cols-1 max-w-[400px] '>
                    <li><a className='text-[#BEBEBE]' href="/">Quem somos</a></li>
                    <li><a className='text-[#BEBEBE]' href="/">Como funciona</a></li>
                    <li><Link className='text-[#BEBEBE]' to="/contato">Contato</Link></li>
                    <li><Link className='text-[#BEBEBE]' to="/">Home</Link></li>
                </ul>
            </div>
            <div className='flex flex-col lg:pt-0 pt-8 gap-[10px] lg:col-span-2'>
                <h5 className='text-white font-bold'>CONTATO</h5>
                <div className='flex flex-col w-full'>
                    <a className='text-[#BEBEBE]'>+55 (21) 3848-9259</a>
                    <a href="mailto:contato@maissaboralimentos.com.br" className='text-[#BEBEBE]'>contato@maissaboralimentos.com.br</a>
                    <a className='text-[#BEBEBE]'>Rua Dr. Paulo Frumencio, s/n, Ponta D’Areia - Niterói - Rio de Janeiro</a>

                </div>
            </div>
            <div className='flex flex-col h-[100px] gap-[10px] pt-8 lg:pt-0'>
                {/* <h5 className='text-white font-bold'>SIGA-NOS</h5> */}
                <div className='flex gap-4'>
                    {/* <a href="https://www.instagram.com/premiotransatlantico/" aria-label='Visite Premio Transatlantico Instagram' target='_blank' ><img src={insta}  alt='Instagram' /></a> */}
                    {/* <a href="https://www.facebook.com/premiolebenskunst" target='_blank' aria-label='Visite Premio Transatlantico Facebook'><img src={face} alt='Facebook'/></a> */}
                   {/* <a href="https://www.linkedin.com/company/premiolebenskunst" target='_blank' aria-label='Visite Premio Transatlantico Linkedin'> <img src={linkedin}  alt='Linkedin'/></a> */}
                </div>
            </div>
        </div>
        <div className='bg-[#181818] '>
            <div className='w-full px-6 py-[20px] gap-3 lg:h-[80px] lg:flex-row flex-col flex justify-between mx-auto max-w-6xl items-center'>
                <small className='text-sm text-[#DFDFDF] lg:text-left text-center'>© Copyright 2024 - Mais Sabor Alimentos – Direitos Reservados</small>
                <small className='text-[#DFDFDF]'>Desenvolvido por <a href="https://matheusdamiao.com.br" className='cursor-pointer hover:underline' target='_blank'>Matheus Damião</a></small>
            </div>
        </div>
      
    </div>
  )
}

export default Footer
