'use client';
import React, { FormEvent, useState } from 'react';
import Nav from '../Components/Nav'
import Footer from "../Components/Footer";
import Link from 'next/link';
import axios from 'axios';
import TextInput from '../Components/TextInput';
import { parseCookies, setCookie } from 'nookies';

const baseUrl = "http://localhost:3001/auth/login";

export default function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const cookies = parseCookies(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const res = await axios.post(baseUrl, {
        email,
        password
      });

      if (res.status === 200 && res.data.access_token) {
        setAuthHeader(res.data.access_token);
        // redireciona para localhost:3000/chat
      }
    } catch (err: any) {
      if (err.response) {
        console.log(err.response.data)
      }
    }
  }

  const setAuthHeader = (jwtToken: string) => {
    setCookie(null, 'access_token', `Bearer ${jwtToken}`);
  };

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
              <form onSubmit={handleSubmit}>
                <TextInput
                  formField="E-mail*"
                  type="email"
                  value={email}
                  onChange={setEmail}
                />
                <TextInput
                  formField="Senha"
                  type="password"
                  value={password}
                  onChange={setPassword}
                />

                <button type='submit' className='text-xl flex h-10 w-full items-center justify-center rounded-md border transition-all focus:outline-none border-rosa bg-azul text-preto hover:bg-verde'>Enviar</button>
              </form>
              <span>Não possui uma conta? <span className=' text-azul hover:text-verde hover:underline'> <Link href="../cadastro">Cadastre-se</Link></span></span>
            </div>
          </div>
        </div>
      </section>
      <footer id="footer" className=" items-center justify-center">
        <Footer />
      </footer>
    </main>
  );
}