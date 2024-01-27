import { Facebook, Instagram, Twitter } from "lucide-react";
import FooterItem from "../StylePresset/FooterItems";

const Footer = () => {
  return (
    <>
      <footer className="bg-zinc-950 text-zinc-400 py-8">
        <div className="mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <h3 className="text-lg font-semibold mb-4">Sobre</h3>
                  <ul className="space-y-2">
                  <li><FooterItem href=".#" children="Empresa"/></li>
                  <li><FooterItem href=".#" children="Time"/></li>
                  <li><FooterItem href=".#" children="Contato"/></li>
                 </ul>
              </div>
            <div>
                <h3 className="text-lg font-semibold mb-4">Menu</h3>
                  <ul className="space-y-2">
                    <li><FooterItem href=".#" children="Home"/></li>
                    <li><FooterItem href=".#" children="Roupas"/></li>
                    <li><FooterItem href=".#" children="Calçados"/></li>
                    <li><FooterItem href=".#" children="Acessorios"/></li>
                   </ul>
            </div>

              <div>
                <h3 className="ml-1 text-lg font-semibold mb-4">Nossas Redes</h3>
                <ul className="flex gap-1">
                <li><FooterItem href=".#" children={<Facebook/>}/></li>
                <li><FooterItem href=".#" children={<Instagram/>}/></li>
                <li><FooterItem href=".#" children={<Twitter/>}/></li>
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

            <div className="mt-8 border-t border-zinc-600 pt-4">
              <p className="text-sm text-zinc-500">&copy; 2023 @sauloviniciust. All rights reserved.</p>
            </div>
        </div>
      </footer>
    </>
  );
};

export { Footer }