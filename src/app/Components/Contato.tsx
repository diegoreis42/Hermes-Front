"use client";
import React from "react";

interface IProps {
  formField: string;
  type: string;
}

const Contato = ({ formField, type }: IProps) => {
  return (
    <div className="flex w-full flex-col gap-1">
      <p className="font-medium text-preto">{formField}</p>
      <input
        className="rounded-lg border border-verde px-2  py-1 font-light drop-shadow-lg transition duration-300 ease-in-out required:border-red-500 focus:border-gray-800 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-opacity-50"
        type={type}
      />
    </div>
  );
};

export default Contato;