import { Facebook, Instagram, Twitter } from "lucide-react";


const Footer = () => {
  return (
    <>
      <footer className="bg-zinc-950 text-zinc-400 py-8">
        <div className="mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <h3 className="text-lg font-semibold mb-4">Sobre</h3>
                  <ul className="space-y-2">
                   <li><a className="hover:text-slate-600" href="#">Empresa</a></li>
                    <li><a className="hover:text-slate-600" href="#">Time</a></li>
                    <li><a className="hover:text-slate-600" href="#">Contato</a></li>
                  </ul>
              </div>
            <div>
                <h3 className="text-lg font-semibold mb-4">Menu</h3>
                  <ul className="space-y-2">
                    <li><a className="hover:text-slate-600" href=".#">Home</a></li>
                    <li><a className="hover:text-slate-600" href="/roupas">Roupas</a></li>
                    <li><a className="hover:text-slate-600" href="/calcados">Calçados</a></li>
                    <li><a className="hover:text-slate-600" href="/acessorios">Acessorios</a></li>
                  </ul>
            </div>

              <div>
                <h3 className="ml-1 text-lg font-semibold mb-4">Nossas Redes</h3>
                <ul className="flex gap-1">
                  <li><a className="hover:text-slate-600" href="#"><Facebook/></a></li>
                  <li><a className="hover:text-slate-600" href="#"><Instagram/></a></li>
                  <li><a className="hover:text-slate-600" href="#"><Twitter/></a></li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">Inscreva-se</h3>
                <p>Inscreva-se para receber promoções e não ficar de fora das novidades.</p>
                <form className="mt-2">
                  <input type="email" placeholder="Digite seu email" className="bg-zinc-900 focus:bg-zinc-400 text-black rounded py-2 px-3 w-full"/>
                  <button className="mt-2 bg-zinc-500 hover:bg-zinc-600 text-black  font-semibold py-2 px-4 rounded">Inscreva-se</button>
                </form>
              </div>
          </div>

            <div className="mt-8 border-t border-gray-600 pt-4">
              <p className="text-sm text-gray-500">&copy; 2023 @sauloviniciust. All rights reserved.</p>
            </div>
        
        </div>
      </footer>
    </>
  );
};

export { Footer }