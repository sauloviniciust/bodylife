
const Menu = () => {
    return (
        <div className="">
      <nav id="navbar" className="w-full fixed top-0 z-20 
				 bg-transparent transition duration-500 ease-in-out ">
		<div className="mt-3  flex items-center font-sans bg-zinc-800">
			<div className="flex-grow mt-3 hidden w-full md:block md:w-auto">
				<a href="#">
					<img className="mb-6 hover:animate-pulse w-60" src="logo.jpeg"
						alt="BodyLife Logo" /></a>
			</div>
			<div className="hidden w-full md:block md:w-auto">
				<ul className="flex space-x-16 text-orange-200 mr-6">
					<li><a className="text-2xl  hover:text-red-600 " href=".#">Home</a></li>
					<li><a className="text-2xl  hover:text-red-600 " href=".#conheça">Novidades</a></li>
					<li><a className="text-2xl  hover:text-red-600 " href="#caminhada">Historia</a></li>
					<li><a className="text-2xl  hover:text-red-600 " href="#contato">Contato</a></li>
				</ul>
			</div>
		</div>

	</nav>
  </div>

    )
}

export { Menu }