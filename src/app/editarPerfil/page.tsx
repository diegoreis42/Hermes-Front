"use client"
import React, { useState } from 'react';
import * as Yup from 'yup';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Cancel';

export default function EditarPerfil() {
  const [email, setEmail] = useState('example@example.com');
  const [password, setPassword] = useState('password123');
  const [nickname, setNickname] = useState('Example');
  const [oldPassword, setOldPassword] = useState('');
  const [errors, setErrors] = useState('');
  const [editingEmail, setEditingEmail] = useState(false);
  const [editingPassword, setEditingPassword] = useState(false);
  const [editingNickname, setEditingNickname] = useState(false);

  const handleEditEmail = () => {
    setEditingEmail(true);
  };

  const handleEditPassword = () => {
    setEditingPassword(true);
  };

  const handleEditNickname = () => {
    setEditingNickname(true);
  };

  const handleSaveEmail = () => {
    setEmail(email);
    setEditingEmail(false);
  };

  const handleSavePassword = () => {
    setPassword(password);
    setEditingPassword(false);
  };

  const handleSaveNickname = () => {
    setNickname(nickname);
    setEditingNickname(false);
  };

  const handleCancelEmail = () => {
    setEditingEmail(false);
  };

  const handleCancelPassword = () => {
    setEditingPassword(false);
  };

  const handleCancelNickname = () => {
    setEditingNickname(false);
  };

  const handleCancel = () => {
    setErrors('');
    setOldPassword('');
    setEditingEmail(false);
    setEditingPassword(false);
    setEditingNickname(false);
  };

  const saveChanges = async () => {
    try {
      const schema = Yup.object().shape({
        email: Yup.string().email('Digite um e-mail válido').required('O e-mail é obrigatório'),
        password: Yup.string().min(8, 'A senha deve ter no mínimo 8 caracteres').required('A senha é obrigatória'),
        oldPassword: Yup.string().when('password', {
          is: (val: string) => val && val.length > 0,
          then: Yup.string().oneOf([password], 'Senha antiga incorreta').required('Senha antiga é obrigatória'),
          otherwise: Yup.string().notRequired(),
        }),
        nickname: Yup.string().required('O apelido é obrigatório'),
      });

      await schema.validate(
        {
          email,
          password,
          oldPassword,
          nickname,
        },
        { abortEarly: false }
      );

      handleSaveEmail();
      handleSavePassword();
      handleSaveNickname();
    } catch (err) {
      setErrors(err.errors.join(' '));
    }
  };

  return (
    <main className="bg-cinza">
      <section id="editar" className="flex items-center justify-center">
        <div
          id="contato-div"
          className="flex w-full max-w-7xl flex-col items-center justify-center gap-8 px-4 py-16 md:py-32"
        >
          <div
            id="contato-content"
            className="flex flex-col items-center justify-between gap-16 md:flex-row md:gap-32"
          >
            <div className="flex max-w-md flex-col items-center gap-4">
              <form>
                <div className="relative">
                  <label >Email</label>
                  {editingEmail ? (
                    <>
                      <input
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="border rounded-md px-4 py-2 w-full focus:outline-none focus:border-blue-500"
                      />
                      <SaveIcon onClick={handleSaveEmail} />
                      <CancelIcon onClick={handleCancelEmail} />
                    </>
                  ) : (
                    <>
                      <input
                        type="text"
                        value={email}
                        readOnly
                        className="border rounded-md px-4 py-2 w-full focus:outline-none focus:border-blue-500"
                      />
                      <EditIcon onClick={handleEditEmail} />
                    </>
                  )}
                </div>
                <div className="relative">
                  <label>Apelido</label>
                  {editingNickname ? (
                    <>
                      <input
                        type="text"
                        value={nickname}
                        onChange={(e) => setNickname(e.target.value)}
                        className="border rounded-md px-4 py-2 w-full focus:outline-none focus:border-blue-500"
                      />
                      <SaveIcon onClick={handleSaveNickname} />
                      <CancelIcon onClick={handleCancelNickname} />
                    </>
                  ) : (
                    <>
                      <input
                        type="text"
                        value={nickname}
                        readOnly
                        className="border rounded-md px-4 py-2 w-full focus:outline-none focus:border-blue-500"
                      />
                      <EditIcon onClick={handleEditNickname} />
                    </>
                  )}
                </div>
                <div className="relative">
                <label >Senha</label>
                  {editingPassword ? (
                    <>
                      <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="border rounded-md px-4 py-2 w-full focus:outline-none focus:border-blue-500"
                      />
                      <SaveIcon onClick={handleSavePassword} />
                      <CancelIcon onClick={handleCancelPassword} />
                      <label >Senha Antiga</label>
                      <input
                        type="password"
                        value={oldPassword}
                        onChange={(e) => setOldPassword(e.target.value)}
                        className="border rounded-md px-4 py-2 w-full focus:outline-none focus:border-blue-500 mt-2"
                        placeholder="Senha antiga"
                      />
                    </>
                  ) : (
                    <>
                      <input
                        type="password"
                        value="********"
                        readOnly
                        className="border rounded-md px-4 py-2 w-full focus:outline-none focus:border-blue-500"
                      />
                      <EditIcon onClick={handleEditPassword} />
                    </>
                  )}
                </div>
                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={handleCancel}
                    className="text-xl flex h-10 w-full items-center justify-center rounded-md border transition-all focus:outline-none border-rosa bg-azul text-preto hover:bg-vermelho mt-4"
                  >
                    Cancelar
                  </button>
                  <button
                    type="button"
                    onClick={saveChanges}
                    className="text-xl flex h-10 w-full items-center justify-center rounded-md border transition-all focus:outline-none border-rosa bg-azul text-preto hover:bg-verde mt-4"
                  >
                    Salvar
                  </button>
                </div>
                {errors && <p className="text-red-500">{errors}</p>}
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
