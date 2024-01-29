import { Carousel } from "./../Carousel";

const Hero = () => {
  return (
    <section id="novidades" className="mt-40 shadow-zinc-900 shadow-2xl">
      <div className="container my-5 mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="flex flex-col md:w-1/3 md:mb-0 place-items-center">
          <h2 className="md:text-2xl text-3xl lg:text-4xl font-bold text-black">
                Confira estas novidades</h2>
          <p className="md:text-sm text-zinc-300 mt-2">
                confira estas novidades, e corre por que acaba logo...</p>
                <button className="mt-2 bg-zinc-950 font-semibold
       hover:bg-zinc-600 text-zinc-200 py-2 
       hover:text-black inline-block px-4 rounded">
        Confira</button>
        </div>
            
        <div className="w-full mb-10 md:w-2/3"><Carousel/></div>
      </div>
    </section>
     );
};

export { Hero };
