import { Button } from "../Buttons";
import { Carousel } from "./../Carousel";

const Hero = () => {
  return (
    <>
      <section className="mt-36 bg shadow-zinc-900 shadow-2xl">
        <div className="container my-10 mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 md:mb-0">
              <h2 className="text-3xl font-bold text-black">
                Confira estas novidades
              </h2>
              <p className="text-zinc-300 mt-2">
                confira estas novidades, e corre por que acaba logo...
              </p>
             <a href="#" className=""><Button children="Compre" /></a>
            </div>
            <div className="mb-10 md:w-1/2">
             <Carousel/>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export { Hero };
