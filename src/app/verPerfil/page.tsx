// pages/profile/[username].tsx

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

interface User {
  username: string;
  name: string;
  email: string;
  // Outros campos do perfil
}

const UserProfile = () => {
  const router = useRouter();
  const { username } = router.query;
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    if (username) {
      fetch(`/api/users/${username}`)
        .then((response) => response.json())
        .then((data: User) => {
          setUser(data);
        })
        .catch((error) => {
          console.error('Erro ao buscar dados do usuário:', error);
        });
    }
  }, [username]);

  if (!user) {
    return <div>Carregando...</div>;
  }

  return (
    <div>
      <h1>Perfil de {user.username}</h1>
      <p>Nome: {user.name}</p>
      <p>Email: {user.email}</p>
      {/* Outros campos do perfil */}
    </div>
  );
};

export default UserProfile;
