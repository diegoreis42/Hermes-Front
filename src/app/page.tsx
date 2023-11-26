import React from 'react';
import Nav from './Components/Nav'
import Carousel from './Components/Carousel'
import Form from "./Components/TextInput";
import Footer from "./Components/Footer";

export default function Home() {
  return (
    <main className="bg-cinza">
      <section id="nav">
        <Nav />
      </section>

      <section id="sobre" className="pt-[75px]">
        <Carousel />
      </section>

      <section id="contato" className="flex items-center justify-center">
        <div
          id="contato-div"
          className="flex w-full max-w-7xl flex-col items-center justify-center gap-8 px-4 py-16 md:py-32"
        >
          <h2 className="text-center text-4xl font-bold drop-shadow-lg font-lobster text-azul">
            Contato
          </h2>
          <div
            id="contato-content"
            className="flex flex-col items-center justify-between gap-16 md:flex-row md:gap-32"
          >
            <div
              className="flex max-w-md flex-col items-center gap-4"
            >
              <Form formField="Nome*" type="text" />
              <Form formField="E-mail*" type="email" />
              <Form formField="Assunto" type="assunto" />
              <div>
                <p className="font-medium text-preto">Mensagem</p>
                <textarea
                  className="rounded-lg border border-verde bg-gray-100 px-2 py-1 font-light drop-shadow-lg transition duration-300 ease-in-out focus:border-gray-800 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-opacity-50"
                  cols="30"
                  rows="5"
                ></textarea>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer id="footer" className="flex items-center justify-center">
        <Footer></Footer>
      </footer>
    </main>
  );
}