import NavItem from "../StylePresset/NavItens";

const Mobile = () => {

  return (
 
    <ul className="my-36 md:hidden text-zinc-200  text-5xl 
                    flex flex-col gap-8 items-center">
                      
      <li><NavItem href="/novidades" children="Novidades"/></li>
       <li><NavItem href="/roupas" children="Roupas"/></li>
      <li><NavItem href="/calcados" children="Calçados"/></li>
      <li><NavItem href="/acessorios" children="Acessorios"/></li>
    </ul>
       
  );
};

export { Mobile };
