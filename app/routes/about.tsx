export default function Sobre() {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-6 text-center">
          Sobre este site
        </h1>
        <p className="text-xl text-gray-700 leading-relaxed mb-4">
          Este site usa o{" "}
          <span className="font-semibold text-indigo-600">
            REST Countries API
          </span>{" "}
          para exibir informações abrangentes sobre países de todo o mundo.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Explore nossos dados para aprender sobre nomes de países, capitais,
          regiões, populações, bandeiras e muito mais. Quer você esteja curioso
          sobre um país específico ou esteja procurando insights sobre regiões
          globais, nosso explorador interativo torna isso fácil.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          O objetivo foi construir um aplicativo web totalmente responsivo e
          moderno usando as tecnologias mais recentes, incluindo{" "}
          <span className="text-indigo-400">React Router v7 </span>
          para roteamento contínuo e{" "}
          <span className="text-indigo-400"> Tailwind CSS</span> para interface
          de usuário.
        </p>
      </div>
    </div>
  );
}
