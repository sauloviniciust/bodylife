import { ShoppingCart, User, Search } from "lucide-react";

const Menu = () => {
  return (
    <div className="">
      <nav
        id="navbar"
        className="w-full fixed top-0 z-20 bg-transparent transition duration-500 ease-in-out"
      >
        <div className="flex items-center font-sans bg-zinc-950 shadow-zinc-900 shadow-2xl hover:shadow-zinc-700 hover:shadow-lg">
          <div className="ml-6">
            <a href="#">
              <img
                className="hover:animate-pulse w-60"
                src="bodylifebranco.png"
                alt="BodyLife Logo"
              />
            </a>
          </div>
          <div className="flex-grow hidden md:block">
            <ul className="flex space-x-10 text-white justify-center ">
              <li>
                <a className="  text-2xl hover:text-slate-600" href=".#">
                  Novidades
                </a>
              </li>
              <li>
                <a className="  text-2xl hover:text-slate-600" href=".#conheça">
                  Masculino
                </a>
              </li>
              <li>
                <a
                  className="  text-2xl hover:text-slate-600"
                  href="#caminhada"
                >
                  Feminino
                </a>
              </li>
              <li>
                <a className="  text-2xl hover:text-slate-600" href="#contato">
                  Promoções
                </a>
              </li>
            </ul>
          </div>

          <div>
            <ul className="flex space-x-2 text-white mr-6">
              <li>
                <a className=" text-2xl hover:text-slate-600" href="#search">
                  <Search />
                </a>
              </li>
              <li>
                <a className=" text-2xl hover:text-slate-600" href="#Profile">
                  <User />
                </a>
              </li>
              <li>
                <a className=" text-2xl hover:text-slate-600" href="#cart">
                  <ShoppingCart />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export { Menu };
