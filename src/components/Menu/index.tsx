import { useEffect, useState } from "react";
import { ShoppingCart, User, Search } from "lucide-react";
import { Chart } from "../Counter/chartCount";
import { bodyLifeLogo } from "../Constants";
import NavItem from "../NavItens/NavItens";

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
    <div>
      <div
        className={`flex items-center font-sans
         shadow-zinc-900 shadow-2xl hover:shadow-zinc-700 hover:shadow-lg  
         w-full fixed top-0 z-20 transition duration-1000 ease-in-out ${
           isScrolled ? "bg-black" : "bg-transparent"
         }`}
      >
        <div className="ml-6">
          <a href="#">{bodyLifeLogo}</a>
        </div>
        
        <div className="flex-grow hidden md:block">
          <ul className="flex space-x-10 text-white justify-center ">
            <li><NavItem href=".#" children="Novidades"/></li>
            <li><NavItem href=".#" children="Masculino"/></li>
            <li><NavItem href=".#" children="Feminino"/></li>
            <li><NavItem href=".#" children="Promoções"/></li>
          </ul>
        </div>

        <div>
          <ul className="flex space-x-2 text-white mr-6">
            <li><NavItem href=".#" children={ <Search />}/></li>
            <li><NavItem href=".#" children={ <User />}/></li>
            <li>
              <a className="flex">
                <NavItem href=".#" children={ <ShoppingCart />}/>
                <Chart /></a>
            </li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export { Menu };
