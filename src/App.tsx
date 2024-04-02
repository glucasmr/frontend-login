import { useState } from 'react';
import './App.css';

function App() {

  return (
    <div className="w-full h-screen flex items-start bg-white">
      <div className="relative w-2/3 h-full flex flex-col">
        <div className="absolute bottom-[15%] left-[5%] flex flex-col">
          <h1 className="text-2xl text">Plataforma de cursos completa</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates placeat esse nihil commodi illo quaerat id consequatur ad harum rem laudantium minima hic, ducimus voluptate mollitia alias non dolore vel.</p>
        </div>
        <img src="../public/Banner.png" className="w-full h-full object-cover" />
      </div>

      <div className="w-1/3 h-full bg-white flex flex-col p-10 justify-between">
        <h1 className="font-bold">Boas vindas!<FontAwesomeIcon icon={faEnvelope} /></h1>
        <p>Entre utilizando uma das opções abaixo</p>


        <div className="w-full flex flex-col">
          <h3 className="text-2xl font-semibold mb-4">Login</h3>
          <FontAwesomeIcon icon="fa-brands fa-facebook" />
        </div>

        <div className="w-full flex items-center justify-center">
          <p>Esqueceu sua senha? <span className="text-blue-700">Recuperar senha</span></p>
        </div>

      </div>
    </div>
  )
}

export default App
