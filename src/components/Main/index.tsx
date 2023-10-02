
import { Card } from "../Card";


const Main = () => {
  const imagem1 = (<img src="Slider colcci.jpg"alt="Slider colcci em varias cores, super confortavel"className="w-full"/>);
  const imagem2 = (<img src="Sandália colcci.jpg"alt="Sandalia colcci em varias cores, super confortavel"className="w-full"/>);
  const imagem3 = (<img src="VESTIDO COLCCI FITNESS.jpg"alt="Vestidos colcci em varias cores e tecido super leve"className="w-full"/>);
  const imagem4 = (<img src="bolsa colcci.jpg"alt="Bolsa colcci em varias cores, para varias ocasioes"className="w-full"/>);

  return (
    <>
       <section className="bg-zinc-800 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-zinc-200 mb-6">Produtos</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

          <Card image={imagem1} product="Slider colcci" about="Slider colcci em varias cores, super confortavel" price="R$ 139,90"/>
          <Card image={imagem2} product="Sandália colcci" about="Sandalia colcci em varias cores, super confortavel" price="R$ 99.90"/>
          <Card image={imagem3} product="Vestido Colcci Fitness" about="Vestidos colcci em varias cores e tecido super leve" price="R$ 169.90"/>
          <Card image={imagem4} product="Bolsa colcci" about="Bolsa colcci em varias cores, para varias ocasioes" price="R$ 289.90"/>
         
          </div>
        </div>
      </section> 
    </>
  );
};

export { Main };
