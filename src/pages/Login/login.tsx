import "tailwindcss/tailwind.css";
import logoNatal from "../../assets/login_images/logo_natal_vermelha.svg";
import papaiNoel from "../../assets/login_images/papai_noel.svg";
import threes from "../../assets/login_images/threes.svg";
import montanhaFooter from "../../assets/login_images/motanha_footer.svg";
import estrelas from "../../assets/login_images/estrelas.svg";
import estrelas2 from "../../assets/login_images/estrelas_2.svg";
import estrelas3 from "../../assets/login_images/estrelas_3.svg";

function App() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center relative">
      <img
        src={logoNatal}
        alt="Logo Natal Solidário"
        className="absolute top-5 left-10 w-20 h-auto"
      />
      <div className="absolute top-0 left-0 w-full h-full">
        {/* estrelas no lado esquerdo */}
        <div className="absolute top-0 left-0 w-1/2 h-full">
          <img
            src={estrelas}
            alt="Estrelas"
            className="absolute top-0 left-0 w-full h-1/3 object-cover opacity-90"
          />
          <img
            src={estrelas2}
            alt="Estrelas 2"
            className="absolute top-1/3 left-0 w-full h-1/3 object-cover opacity-85"
          />
          <img
            src={estrelas3}
            alt="Estrelas 3"
            className="absolute top-2/3 left-0 w-full h-1/3 object-cover opacity-80"
          />
        </div>
        {/* estrelas no lado direito */}
        <div className="absolute top-0 right-0 w-1/2 h-full">
          <img
            src={estrelas}
            alt="Estrelas"
            className="absolute top-0 right-0 w-full h-1/3 object-cover opacity-90"
          />
          <img
            src={estrelas2}
            alt="Estrelas 2"
            className="absolute top-1/3 right-0 w-full h-1/3 object-cover opacity-85"
          />
          <img
            src={estrelas3}
            alt="Estrelas 3"
            className="absolute top-2/3 right-0 w-full h-1/3 object-cover opacity-80"
          />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center relative z-10 h-screen w-full">
        <div className="sm:flex items-center justify-between w-3/5 block">
          {/* papai Noel e login */}
          <img src={papaiNoel} alt="Papai Noel" className="h-3/4" />
          <div className="bg-white p-5 rounded-lg shadow-lg w-80 ">
            <h2 className="text-lg mb-4 font-bold">Fazer Login</h2>
            <form className="space-y-10">
              <div className="mb-3">
                <label
                  className="block text-gray-700 text-xs mb-1 "
                  htmlFor="username"
                >
                  Usuário
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-xs"
                  id="username"
                  type="text"
                  placeholder="Digite nome de usuario"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-xs mb-1"
                  htmlFor="password"
                >
                  Senha
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-xs"
                  id="password"
                  type="password"
                  placeholder="Digite sua senha"
                />
              </div>
              <div>
                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded w-full"
                  type="button"
                >
                  Entrar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* rodapé com árvores e montanhas */}
      <div className="absolute bottom-0 left-0 w-full">
        <div className="relative">
          <img
            src={threes}
            alt="Árvores"
            className="w-full"
            style={{
              position: "absolute",
              bottom: "70px",
              zIndex: 0,
              opacity: 0.8,
            }}
          />
          <img
            src={montanhaFooter}
            alt="Montanha"
            className="w-full"
            style={{
              position: "relative",
              zIndex: 1,
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
