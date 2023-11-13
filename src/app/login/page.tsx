import React from 'react';
import Nav from '../Components/Nav'
import Form from "../Components/Contato";
import Footer from "../Components/Footer";
import Link from 'next/link';

export default function Login() {
  return (
    <main className="bg-cinza">
      <section id="nav">
        <Nav />
      </section>

      <section id="login" className="flex items-center justify-center">
        <div
          id="contato-div"
          className="flex w-full max-w-7xl flex-col items-center justify-center gap-8 px-4 py-16 md:py-32"
        >
          <div
            id="contato-content"
            className="flex flex-col items-center justify-between gap-16 md:flex-row md:gap-32"
          >
            <div
              className="flex max-w-md flex-col items-center gap-4"
            >
              <Form formField="E-mail*" type="email" />
              <Form formField="Senha" type="Senha" />
              <button className='text-xl flex h-10 w-full items-center justify-center rounded-md border transition-all focus:outline-none border-rosa bg-azul text-preto hover:bg-verde'>Enviar</button>
              <span>Não possui uma conta? <span className=' text-azul hover:text-verde hover:underline'> <Link href="../cadastro">Cadastre-se</Link></span></span>
            </div>
          </div>
        </div>
      </section>
      <footer id="footer" className=" items-center justify-center">
        <Footer></Footer>
      </footer> 
    </main>
  );
}