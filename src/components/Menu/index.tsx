import { useEffect, useState } from "react";
import { ShoppingCart, MenuIcon } from "lucide-react";
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
           isScrolled ? "bg-black" : "bg-transparent"}`}>

        <a className="hover:animate-pulse w-40 md:44 lg:w-56 hidden md:block"
          href="/"><img alt="BodyLife Logo" src="bodylifebranco.png"/>
        </a>

        <div className="flex-grow hidden md:block">
          <ul className="flex space-x-10 justify-center ">
            <li>
              <NavItem href="/" children="Novidades" />
            </li>
            <li>
              <NavItem href="/" children="Roupas" />
            </li>
            <li>
              <NavItem href="/" children="Calçados" />
            </li>
            <li>
              <NavItem href="/" children="Acessorios" />
            </li>
          </ul>
        </div>

        <div className=" hidden md:block">
          <ul className="flex space-x-2 mr-6 ">
            <li>
              <div className="flex text-lg ">
              <NavItem href="/cart"  children={<><ShoppingCart /><Total /></>}/>
              </div>
            </li>
          </ul>
        </div>

        <div className="flex md:hidden grow justify-between ml-3">
          <a className="self-center" href="menumobile">
            <MenuIcon />
          </a>

          <div className=" hidden md:block"></div>
            <a href="/">
              <img className="hover:animate-pulse w-40 md:44 lg:w-56 my-3 "
                alt="BodyLife Logo"src="bodylifebranco.png"/>
            </a>

            <div className="flex list-none md:hidden text-white py-2 mr-4 self-center">
            <a> <NavItem href="/cart" children={ <div className="flex text-lg">
                  <ShoppingCart /> <Total />
                </div>
                }/>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export { Menu };
