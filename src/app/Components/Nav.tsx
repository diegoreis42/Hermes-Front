"use client"

import React, { useState } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'



const Nav = () => {
    let [isOpen, setisOpen] = useState(false)

  return (
    <div className= 'shadow-md relative top-0 w-full inset-x-0'>
        <div className=' md:flex md:px-10 py-7 px-7 bg-verde'>
            <div className='ms-20 flex items-center'>
                <Link className=" left" href={"/"}>
                    <img className="md:h-24 h-16" src="./img/logo.png" alt="" />
                </Link>
            </div>
            
            <div onClick={() => setisOpen(!isOpen)} className='h-7 w-7 absolute right-8 top-4 cursor-pointer md:hidden text-white'>
                {
                    isOpen ? <XMarkIcon/> : <Bars3Icon/>
                }

            </div>
 
            <ul className={`md:flex md:items-center justify-center md:pb-0 pb-12 md:static pl-4 o md:gap-5 absolute md:z-auto z-[-1] left-0 w-full transition-all duration-700 ease-in ${isOpen ? 'top-14' : 'top-[-490px]'}`}>
                <li className='ms-48 text-preto text-3xl font-lobster px-20 font-bold hover:text-azul hover:underline'><Link  href="/">Sobre</Link></li>
                <li className='text-preto text-3xl font-lobster px-20 font-bold hover:text-azul hover:underline'><Link  href="/">Contato</Link> </li>
                <li className='text-preto text-3xl font-lobster px-20 font-bold hover:text-azul hover:underline'><Link  href="/">Login</Link></li>
            </ul>
            <img className="md:h-24 h-16 right me-20" src="./img/user.png" alt="" />
            
        </div>
    </div>
  )
}

export default Nav