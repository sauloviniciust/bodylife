import { Component } from "react";
import { Counter } from "../Counter";
import { Link } from "react-router-dom";

class Calcado extends Component<{
  id: string; 
  src: string;
  alt: string;
  product: string;
  about: string;
  price: string;
}> {
  render() {

    if (this.props.id !== "calcado") {
      return null;
    }

    return (
      <section
        className="bg-zinc-700 rounded-lg shadow-black hover:bg-zinc-800 
        border-zinc-600 scale-75 md:scale-90 lg:scale-90 xl:scale-100 
        transition overflow-hidden ease-in-out delay-100 text-center 
        z-10 transform hover:scale-105 border-2 shadow-2xl">
        
        <Link to={`/item?src=${this.props.src}
                    &product=${this.props.product}
                    &about=${this.props.about}
                    &price=${this.props.price}
                    &alt=${this.props.alt}
                    &id=${this.props.id}`}>
          
          <div className="h-auto"><img src={this.props.src} alt={this.props.alt} /></div>
          

        </Link>
        
        <div className="flex font-bold flex-col gap-5 p-4 text-black">

            <h3 className="text-xl">{this.props.product}</h3>

            <p className="text-zinc-300">
             {this.props.about}</p>

            <Counter src={this.props.src}
                    product={this.props.product}
                    about={this.props.about}
                    price={this.props.price}
                    alt={this.props.alt}
                    id={this.props.id}
                    image={this.props.src}
                    units={1}/>
            
            <span>{this.props.price}</span>

        </div>
      </section>
    );
  }
}



export { Calcado };
