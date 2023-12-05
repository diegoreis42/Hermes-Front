import {
  IoChatbubblesOutline,
  IoPeopleOutline,
  IoGameControllerOutline,
  IoShieldCheckmarkOutline,
  IoLockClosedOutline,
  IoInformationCircleOutline,
  IoHeartOutline,
  IoRocketOutline,
} from "react-icons/io5";
import Carrossel from "./Components/Carrossel"
import styles from './page.module.css'

export default function Home() {
  return (
    <main className="bg-gray-100 min-h-screen p-8">
      <Carrossel />

      <section className="mt-8">
        <h2 className="text-3xl font-bold mb-4">Sobre</h2>
        <p className="text-lg text-gray-600 mb-6 text-justify">
          Bem-vindo a um lugar onde cada clique é uma porta para uma nova conexão, onde as palavras são pontes que atravessam fronteiras e culturas. Este é um espaço onde sorrisos e risos são transmitidos através de telas, onde pessoas de todas as esferas da vida se encontram para compartilhar, aprender e explorar juntas.
        </p>
        <p className="text-lg text-gray-600 mb-6 text-justify">
          Em nosso mundo digital, a comunicação é mais do que a transmissão de informações; é o enlace que une corações e mentes. Estamos aqui para oferecer um ambiente onde suas ideias são ouvidas, suas histórias são celebradas e suas experiências são valorizadas.
        </p>
        <p className="text-lg text-gray-600 mb-6 text-justify">
          Nosso propósito é criar um refúgio virtual, um local seguro onde a interação é cuidadosamente cultivada, onde você pode ser autêntico e se conectar com autenticidade. Desde conversas casuais até discussões profundas, aqui, cada interação é uma oportunidade de crescer e entender novas perspectivas.
        </p>
        <p className="text-lg text-gray-600 mb-6 text-justify">
          Então, junte-se a nós nesta jornada virtual, onde a distância é apenas um detalhe e a proximidade é medida pelo calor das conexões humanas. Seja parte dessa comunidade, onde cada pessoa é um protagonista, e cada nova amizade é um capítulo em um livro que nunca para de crescer.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-lg p-4 flex items-center justify-center shadow-md">
            <IoChatbubblesOutline className="text-4xl text-blue-500 mr-4" />
            <div>
              <h3 className="text-xl font-semibold mb-2">Comunicação</h3>
              <p className="text-gray-600">Converse com pessoas de todo o mundo.</p>
            </div>
          </div>

          <div className="bg-white rounded-lg p-4 flex items-center justify-center shadow-md">
            <IoPeopleOutline className="text-4xl text-blue-500 mr-4" />
            <div>
              <h3 className="text-xl font-semibold mb-2">Conexões</h3>
              <p className="text-gray-600">Conheça novas pessoas e amplie sua rede.</p>
            </div>
          </div>

          <div className="bg-white rounded-lg p-4 flex items-center justify-center shadow-md">
            <IoGameControllerOutline className="text-4xl text-blue-500 mr-4" />
            <div>
              <h3 className="text-xl font-semibold mb-2">Diversão</h3>
              <p className="text-gray-600">Divirta-se com atividades interativas.</p>
            </div>
          </div>

          <div className="bg-white rounded-lg p-4 flex items-center justify-center shadow-md">
            <IoShieldCheckmarkOutline className="text-4xl text-blue-500 mr-4" />
            <div>
              <h3 className="text-xl font-semibold mb-2">Segurança</h3>
              <p className="text-gray-600">Priorizamos a segurança dos nossos usuários.</p>
            </div>
          </div>

          <div className="bg-white rounded-lg p-4 flex items-center justify-center shadow-md">
            <IoLockClosedOutline className="text-4xl text-blue-500 mr-4" />
            <div>
              <h3 className="text-xl font-semibold mb-2">Confiabilidade</h3>
              <p className="text-gray-600">Confie em nossa plataforma para conexões autênticas.</p>
            </div>
          </div>

          <div className="bg-white rounded-lg p-4 flex items-center justify-center shadow-md">
            <IoInformationCircleOutline className="text-4xl text-blue-500 mr-4" />
            <div>
              <h3 className="text-xl font-semibold mb-2">Novidades</h3>
              <p className="text-gray-600">Explore novas funcionalidades em constante evolução.</p>
            </div>
          </div>
          <div className="bg-white rounded-lg p-4 flex items-center justify-center shadow-md">
            <IoHeartOutline className="text-4xl text-blue-500 mr-4" />
            <div>
              <h3 className="text-xl font-semibold mb-2">Afinidades</h3>
              <p className="text-gray-600">Encontre pessoas com interesses similares.</p>
            </div>
          </div>
          <div className="bg-white rounded-lg p-4 flex items-center justify-center shadow-md">
            <IoRocketOutline className="text-4xl text-blue-500 mr-4" />
            <div>
              <h3 className="text-xl font-semibold mb-2">Inovação</h3>
              <p className="text-gray-600">Estamos sempre buscando novas soluções e tecnologias.</p>
            </div>
            </div>
          </div>
      </section>
    </main>
  );
}
