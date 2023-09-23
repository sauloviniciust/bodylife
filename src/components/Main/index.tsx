const Main = () => {
    return (
        <>
        <section className="bg-zinc-800 py-12">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold text-green-800 mb-6">Produtos</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <img src="https://static3.tcdn.com.br/img/img_prod/311840/180_camisa_sao_paulo_fast_bordo_e_vermelha_122783_1_e122b3c6f540aa95f8f050f0f60c94c5.jpg" alt="Product Image" className="w-full"/>
        <div className="p-4">
          <h3 className="text-xl font-bold text-gray-800 mb-2">Product Name</h3>
          <p className="text-gray-600">Product description goes here.</p>
          <div className="mt-4">
            <span className="text-gray-800 font-bold">$99.99</span>
            <button className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded float-right">Add to Cart</button>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <img src="https://static3.tcdn.com.br/img/img_prod/311840/180_camisa_umbro_gremio_i_2023_juvenil_115651_1_4609d938bb8e2fe24b9d4228cecf419d.jpg" alt="Product Image" className="w-full"/>
        <div className="p-4">
          <h3 className="text-xl font-bold text-gray-800 mb-2">Product Name</h3>
          <p className="text-gray-600">Product description goes here.</p>
          <div className="mt-4">
            <span className="text-gray-800 font-bold">$99.99</span>
            <button className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded float-right">Add to Cart</button>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <img src="https://static3.tcdn.com.br/img/img_prod/311840/180_camisa_corinthians_democracia_1982_preta_120827_1_5bedc3380760f5faf45995c42647301c.jpg" alt="Product Image" className="w-full"/>
        <div className="p-4">
          <h3 className="text-xl font-bold text-gray-800 mb-2">Product Name</h3>
          <p className="text-gray-600">Product description goes here.</p>
          <div className="mt-4">
            <span className="text-gray-800 font-bold">$99.99</span>
            <button className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded float-right">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

        </>
    )
}

export { Main }