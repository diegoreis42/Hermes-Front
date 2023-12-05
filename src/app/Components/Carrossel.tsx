"use client";
import React, { useState } from "react";

/* Importe os ícones dos botões */
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

/* Função de componente de Carrossel */
export default function Carrossel() {
  /* Array onde se adiciona a imagem e os textos a serem exibidos no carrossel */
  const slides = [
    {
      url: "./img/carrossel.png",
    },
    {
      url: "./img/carrossel1.png",
    },
    {
      url: "./img/carrossel2.png",
    },
  ];

  /* Variáveis de controle do carrossel */
  const [currentIndex, setCurrentIndex] = useState(0);

  /* Controle do exibir anterior */
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  /* Controle do exibir próximo */
  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  /* Controle específico do exibir */
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="group relative mx-auto max-w-auto w-full px-4 py-0">
      {/* Div do cabeçalho do carrossel, fica centralizado e em caixa alta */}
      <div className="flex justify-center pb-7"></div>

      <div className="relative rounded-2xl bg-cover bg-center bg-no-repeat duration-500 lg:bg-contain">
        {/* Div de container do carrossel */}
        <img
          className="mx-auto h-[350px] w-full rounded-xl object-cover lg:h-[400px]"
          src={slides[currentIndex].url}
        />
        {/* Chamada da imagem no array */}
      </div>

      {/* Setas de navegação */}
      <div className="absolute left-5 top-[50%] hidden -translate-x-0 translate-y-[-50%] cursor-pointer rounded-full bg-azul p-2 text-2xl text-white hover:text-blue-600 group-hover:block">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      <div className="absolute right-5 top-[50%] hidden -translate-x-0 translate-y-[-50%] cursor-pointer rounded-full bg-azul p-2 text-2xl text-white hover:text-blue-600 group-hover:block">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>

      {/* Botões inferiores de controle de index */}
      <div className="top-4 flex items-center justify-center py-2">
        <div className="top-4 flex items-center rounded-full bg-black/20 text-white">
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className={`cursor-pointer text-2xl hover:text-azul ${
                currentIndex === slideIndex ? "text-preto" : ""
              }`}
            >
              <RxDotFilled />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}