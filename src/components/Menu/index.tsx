import { useEffect, useState } from "react";
import { ShoppingCart, User, Search, MenuIcon } from "lucide-react";
import NavItem from "../StylePresset/NavItens";
import { Total } from "./../valorTotal";

const Menu = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  return (
    <>
      <div
        className={`flex place-content-between items-center text-white font-sans
         shadow-zinc-900 shadow-2xl hover:shadow-zinc-700 hover:shadow-lg  
         w-full fixed top-0 z-20 transition duration-1000 ease-in-out ${
           isScrolled ? "bg-black" : "bg-transparent"
         }`}>

        <a href="/"><img className="hover:animate-pulse w-40 md:44 lg:w-56"
            src="bodylifebranco.png"alt="BodyLife Logo"/></a>

        <div className="flex-grow hidden md:block">
          <ul className="flex space-x-10 justify-center ">
            <li>
              <NavItem href="/novidades" children="Novidades" />
            </li>
            <li>
              <NavItem href="/roupas" children="Roupas" />
            </li>
            <li>
              <NavItem href="/calcados" children="Calçados" />
            </li>
            <li>
              <NavItem href="/acessorios" children="Acessorios" />
            </li>
          </ul>
        </div>

        <div className=" hidden md:block">
          <ul className="flex space-x-2 mr-6 ">
            <li>
              <NavItem href=".#" children={<Search />} />
            </li>
            <li>
              <NavItem href=".#" children={<User />} />
            </li>
            <li>
              <a>
                <NavItem
                  href="/cart"
                  children={
                    <>
                      <ShoppingCart /> <Total />
                    </>
                  }
                />
              </a>
            </li>
          </ul>
        </div>
        <div className="block md:hidden text-white py-2 mr-4">
          <a href="menumobile">
            {" "}
            <MenuIcon />
          </a>
        </div>
      </div>
    </>
  );
};

export { Menu };