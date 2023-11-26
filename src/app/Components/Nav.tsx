"use client"
import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleUserMenu = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
  };

  return (
    <div className="shadow-md relative top-0 w-full inset-x-0">
      <div className="md:flex md:px-10 py-7 px-7 bg-verde">
        <div className="ms-20 flex items-center">
          <Link className="left" href={"/"}>
            <img className="md:h-24 h-16" src="./img/logo.png" alt="" />
          </Link>
        </div>

        <div onClick={toggleMenu} className="h-7 w-7 absolute right-8 top-4 cursor-pointer md:hidden text-white">
          {isOpen ? <XMarkIcon /> : <Bars3Icon />}
        </div>

        <ul className={`md:flex md:items-center justify-center md:pb-0 pb-12 md:static pl-4 o md:gap-5 absolute md:z-auto z-[-1] left-0 w-full transition-all duration-700 ease-in ${isOpen ? 'top-14' : 'top-[-490px]'}`}>
          <li className='ms-48 text-preto text-3xl font-lobster px-20 font-bold hover:text-azul hover:underline'>
            <Link href="/">Sobre</Link>
          </li>
          <li className='text-preto text-3xl font-lobster px-20 font-bold hover:text-azul hover:underline'>
            <Link href="/">Contato</Link>
          </li>
          <li className='text-preto text-3xl font-lobster px-20 font-bold hover:text-azul hover:underline'>
            <Link href="/">Login</Link>
          </li>
        </ul>

        <svg
          xmlns="http://w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="md:h-24 h-16 right me-20 cursor-pointer border border-gray-400 p-2 rounded"
          onClick={toggleUserMenu}
        >
          <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
        </svg>

        {isUserMenuOpen && (
          <div className="bg-white p-4 absolute right-20 top-28 border border-gray-400 rounded">
            <ul className="text-preto text-xl font-lobster font-bold ">
              <li className='hover:text-azul hover:underline'>
                <Link href="/">Meu perfil</Link>
              </li>
              <li className='hover:text-azul hover:underline'>
                <Link href="/">Editar perfil</Link>
              </li>
              <li className='hover:text-azul hover:underline'>
                <Link href="/">Excluir perfil</Link>
              </li>
            </ul>
            <div className="text-preto text-xl font-lobster font-bold hover:text-azul hover:underline" onClick={toggleUserMenu}>
              Fechar Menu de Usuário
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Nav;
