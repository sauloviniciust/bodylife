import { Button } from "../Buttons";

const Main = () => {
  return (
    <>
      <section className="bg-zinc-800 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-zinc-200 mb-6">Produtos</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div className="bg-zinc-700 rounded-lg shadow-black shadow-2xl overflow-hidden border-2 border-zinc-600">
              <img
                src="https://scontent.fplu13-1.fna.fbcdn.net/v/t39.30808-6/318443891_828463434783910_2384505542741429708_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=49d041&_nc_ohc=LbmEfI7KomEAX_6tr66&_nc_ht=scontent.fplu13-1.fna&oh=00_AfBsSnNamiDr64CnfG1R9m0CfBkF5GKUaR587X5Lbv-OTg&oe=6517F163"
                alt="Product Image"
                className="w-full"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold text-black mb-2">
                Conjunto LIVE neon
                </h3>
                <p className="text-zinc-300 font-bold">Nova cor neon LIVE e nova bolsa CCM neon com rosa prática</p>
                <div className="mt-4">
                  <span className="text-black font-bold">$99.99</span>
                  <a href="#" className="ml-4"><Button children="Compre" /></a>
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
