import { Button } from "../Buttons";
import { Counter } from "../Counter";

const Main = () => {
  return (
    <>
      <section className="bg-zinc-800 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-zinc-200 mb-6">Produtos</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
           
            <div className="bg-zinc-700 rounded-lg shadow-black hover:bg-zinc-800 border-zinc-600   
             scale-75 md:scale-90 lg:scale-90 xl:scale-100 transition overflow-hidden 
             ease-in-out delay-100 text-center z-10 transform hover:scale-105 border-2 shadow-2xl">
              <img
                src="Slider colcci.jpg"
                alt="Slider colcci"
                className="w-full"/>
                <div className="p-4">
                 <h3 className="text-xl font-bold text-black mb-2">Slider colcci</h3>
                  <p className="text-zinc-300 font-bold">
                  Slider colcci em varias cores, super confortavel </p>
                <div className="mt-4">
                  <span className="text-black font-bold mr-4">R$ 139,90</span>
                  <a href="#"><Button children="Adicionar" /></a>
                </div>
              </div>
            </div>

            <div className="bg-zinc-700 rounded-lg shadow-black hover:bg-zinc-800 border-zinc-600   
             scale-75 md:scale-90 lg:scale-90 xl:scale-100 transition overflow-hidden 
             ease-in-out delay-100 text-center z-10 transform hover:scale-105 border-2 shadow-2xl">
              <img
                src="Sandália colcci.jpg"
                alt="Product Image"
                className="w-full"/>
                <div className="p-4">
                 <h3 className="text-xl font-bold text-black mb-2">Sandália colcci</h3>
                  <p className="text-zinc-300 font-bold">
                  <Counter/></p>
                <div className="mt-4">
                  <span className="text-black font-bold mr-4">R$ 99.90</span>
                  <a href="#"><Button children="Compre" /></a>
                </div>
              </div>
            </div>
                
            <div className="bg-zinc-700 rounded-lg shadow-black hover:bg-zinc-800 border-zinc-600   
             scale-75 md:scale-90 lg:scale-90 xl:scale-100 transition overflow-hidden 
             ease-in-out delay-100 text-center z-10 transform hover:scale-105 border-2 shadow-2xl">
              <img
                src="VESTIDO COLCCI FITNESS.jpg"
                alt="Product Image"
                className="w-full"/>
                <div className="p-4">
                 <h3 className="text-xl font-bold text-black mb-2">Vestido Colcci Fitness</h3>
                  <p className="text-zinc-300 font-bold ">
                   Vestidos colcci em varias cores e tecido super leve</p>
                <div className="mt-4">
                  <span className="text-black font-bold mr-4">R$ 169.90</span>
                  <a href="#"><Button children="Compre" /></a>
                </div>
              </div>
            </div>

            <div className="bg-zinc-700 rounded-lg shadow-black hover:bg-zinc-800 border-zinc-600   
             scale-75 md:scale-90 lg:scale-90 xl:scale-100 transition overflow-hidden 
             ease-in-out delay-100 text-center z-10 transform hover:scale-105 border-2 shadow-2xl">
              <img
                src="bolsa colcci.jpg"
                alt="bolsa colcci"
                className=" w-full h-96"/>
                <div className="p-4">
                 <h3 className="text-xl font-bold text-black mb-2">Bolsa colcci</h3>
                  <p className="text-zinc-300 font-bold">
                   Bolsa colcci em varias cores, para varias ocasioes </p>
                <div className="mt-4">
                  <span className="text-black font-bold mr-4">R$ 289.90</span>
                  <a href="#"><Button children="Compre" /></a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export { Main };
