import './App.css';
import logo from './assets/Icons/ToolzzLogo.svg';
import toolzzLogo from './assets/Icons/ToolzzSmallLogo.svg';
import facebookLogo from './assets/Icons/FacebookSmallLogo.svg';
import appleLogo from './assets/Icons/AppleSmallLogo.svg';
import twitterLogo from './assets/Icons/TwitterSmallLogo.svg';
import enter from './assets/Icons/Enter.svg';
import user from './assets/Icons/User.svg';
import lock from './assets/Icons/Lock.svg';
import banner from './assets/Banner.png';

function App() {

  return (
    <div className="w-full h-screen flex items-start bg-white">
      <div className="relative w-2/3 h-full flex flex-col bg-cover" style={{ backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 1) 0%, transparent 100%),url(${banner})` }}>
        <div className="absolute bottom-[15%] px-12 flex flex-col">
          <p className="w-16 rounded-full bg-blue-600 text-white text-sm font-thin p-1 text-center my-4">Cursos</p>
          <h1 className="text-xl font-bold text-white mb-2">Plataforma de cursos completa</h1>
          <p className="font-extralight text-neutral-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates placeat esse nihil commodi illo quaerat id consequatur ad harum rem laudantium minima hic, ducimus voluptate mollitia alias non dolore vel.</p>
        </div>
      </div>

      <div className="w-1/3 h-full bg-white flex flex-col px-6 py-2 justify-between">
        <div className="w-full flex items-center justify-between">
          <img src={logo} className="size-28" />
          <a className="text-blue-500 ml-4 font-medium" href="#">Criar Conta</a>
        </div>

        <div>
          <h1 className="font-bold text-2xl">Boas-vindas!</h1>
          <p className="mt-4 font-semibold tracking-wider text-sm text-neutral-500">Entre utilizando uma das opções abaixo</p>
          <div className="w-full flex items-center justify-between my-4 space-x-4">
            <button className="border border-black w-full py-2 rounded-md mt-4 flex justify-center items-center"><img src={toolzzLogo} /></button>
            <button className="border border-black w-full py-2 rounded-md mt-4 flex justify-center items-center"><img src={facebookLogo} /></button>
            <button className="border border-black w-full py-2 rounded-md mt-4 flex justify-center items-center"><img src={appleLogo} /></button>
            <button className="border border-black w-full py-2 rounded-md mt-4 flex justify-center items-center"><img src={twitterLogo} /></button>
          </div>
        </div>

        <div className="flex items-center justify-center mt-4">
          <div className="flex-1 border-t dark:border-neutral-200  border-black"></div>
          <div className="px-2  text-black">
            ou
          </div>
          <div className="flex-1 border-t dark:border-neutral-200  border-black"></div>
        </div>

        <div className="mt-3">
          <label className="block text-black text-sm">Usuário</label>
          <div className="mt-2 relative ">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <img src={user} />
            </span>
            <input
              type="text"
              className="w-full p-2 border border-black text-black placeholder:text-neutral-600 rounded-lg pl-10"
              placeholder="Usuário"
            />
          </div>
        </div>

        <div>
          <label className="block text-black text-sm">Senha</label>
          <div className="mt-2 relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <img src={lock} />
            </span>
            <input
              type="password"
              className="w-full p-2 border border-black text-black placeholder:text-neutral-600 rounded-lg pl-10"
              placeholder="Senha"
            />
          </div>
        </div>
        <div className="w-full flex items-center space-x-2 text-sm">
          <input type="checkbox" />
          <label>Manter conectado</label>
        </div>

        <button className="bg-blue-600 w-full text-white py-2 rounded-md mt-2 flex justify-center items-center">
          <img src={enter} className="mr-2" />Entrar
        </button>

        <div className="w-full flex items-center justify-center text-sm">
          <p className="text-neutral-500">Esqueceu sua senha? <a className="text-blue-500" href="#">Recuperar senha</a></p>
        </div>

      </div>
    </div>
  )
}

export default App
