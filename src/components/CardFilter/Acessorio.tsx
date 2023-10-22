import { Component } from "react";
import { Button } from "../Buttons";
import { Counter } from "../Counter";
import { Link } from "react-router-dom";

class Acessorio extends Component<{
  id: string; 
  src: string;
  alt: string;
  image: React.ReactNode;
  product: string;
  about: string;
  price: string;
}> {
  render() {
  
    if (this.props.id !== "acessorio") {
      return null; 
    }

    return (
      <section>
        
        <Link to={`/item?src=${this.props.src}
                    &product=${this.props.product}
                    &about=${this.props.about}
                    &price=${this.props.price}
                    &alt=${this.props.alt}
                    &id=${this.props.id}`}>
        </Link>

          <div className="p-4">
            <h3 className="text-xl font-bold text-black mb-2">{this.props.product}</h3>

            <p className="text-zinc-300 font-bold">
             {this.props.about}<Counter /></p>

            <div className="mt-4">
              <span className="text-black font-bold mr-4">{this.props.price}</span>

              <a href="#"><Button children="Adicionar" /></a>
            </div>
        </div>
      </section>
    );
  }
}

export { Acessorio };
