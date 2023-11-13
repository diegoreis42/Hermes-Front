"use client";
import React from "react";

interface IProps {
  formField: string;
  type: string;
  onChange: (value: string) => void;
  value: string;
}

const TextInput = ({ formField, type, onChange, value }: IProps) => {
  return (
    <div className="flex w-full flex-col gap-1">
      <label className="font-medium text-preto">{formField}</label>
      <input
        className="rounded-lg border text-black border-verde px-2  py-1 font-light drop-shadow-lg transition duration-300 ease-in-out required:border-red-500 focus:border-gray-800 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-opacity-50"
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default TextInput;