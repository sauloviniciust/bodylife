import { Component } from "react";
import { Button } from "../Buttons";
import { Counter } from "../Counter";

class Roupa extends Component<{
  image: any;
  product: string;
  about: string;
  price: string;
  id: string;
}> {
  render() {
   
    if (this.props.id !== "roupa") {
      return null; 
    }

      return (
        <section
          className="bg-zinc-700 rounded-lg shadow-black hover:bg-zinc-800 
          border-zinc-600 scale-75 md:scale-90 lg:scale-90 xl:scale-100 
          transition overflow-hidden ease-in-out delay-100 text-center 
          z-10 transform hover:scale-105 border-2 shadow-2xl h-42">
          <div>{this.props.image}</div>
  
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

export { Roupa };
