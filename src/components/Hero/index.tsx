const Hero = () => {
  return (
    <>
      <section className="mt-36 bg shadow-zinc-900 shadow-2xl">
        <div className="container my-10 mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 md:mb-0">
              <h2 className="text-3xl font-bold text-black">
                Confira esta novidade
              </h2>
              <p className="text-zinc-300 mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius?
              </p>
              <a
                href="#"
                className="mt-2 bg-zinc-950 hover:bg-zinc-600 text-zinc-200  font-semibold py-2 px-4 rounded hover:text-black inline-block"
              >
                Shop Now
              </a>
            </div>
            <div className="mb-10 md:w-1/2">
              <img
                src="https://static3.tcdn.com.br/img/img_prod/311840/180_jaqueta_barcelona_azul_e_vermelha_118279_1_92ef305bc58cd4465f9d3758bf1ea3e4.jpg"
                alt="Hero Image"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export { Hero };
