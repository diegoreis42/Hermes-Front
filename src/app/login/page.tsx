'use client';
import { FormEvent, useState } from 'react';
import axios from 'axios';
import TextInput from '../Components/TextInput';
import { setCookie } from 'nookies';
import { ApiConnection, CookiesAttributes } from '../../../enums';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import useStorage from '../hooks/useStorage';
import { useRouter } from 'next/navigation';

export default function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setItem } = useStorage();
  const router = useRouter();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const res = await axios.post(ApiConnection.PATH_LOGIN, {
        email,
        password
      });

      if (res.status === 200 && res.data.access_token) {
        setCookie(null, CookiesAttributes.ACCESS_TOKEN, `Bearer ${res.data.access_token}`);

        const payload = await axios.get(ApiConnection.PATH_ME, { headers: { Authorization: `Bearer ${res.data.access_token}` } })
        setItem('user', JSON.stringify(payload.data))

        router.push('/chat')
      }
    } catch (err: any) {
      if (err.response) {
        console.log(err.response.data)
      }
    }
  }

  return (
    <main className="bg-cinza">
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
    </main>
  );
}