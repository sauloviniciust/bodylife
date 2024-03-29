import { Component } from "react";
import Checked from "../../components/StylePresset/Checked";
import { Loading } from "../../components/Loading";
import { Product } from "../../interface/Product";
interface ItemState {
  isLoading: boolean;
}
class Item extends Component<Product, ItemState> {
  constructor(props: Product) {
    super(props);
    this.state = {
      isLoading: true,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 2000);
  }

  render() {
    if (this.state.isLoading) {
      return <Loading />;
    }

    return (
      <div className="flex font-sans my-40 mx-20">
        <div className="hover:scale-125 flex-none w-48 relative border-2 border-zinc-800 shadow-black shadow-xl ">
          <img
            src={this.props.src}
            alt={this.props.alt}
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <form className="flex-auto p-6">
          <div className="flex flex-wrap">
            <h1 className="flex-auto text-lg font-semibold text-zinc-200">
              {this.props.product}
            </h1>
            <div className="text-lg font-semibold text-zinc-100">
              R$-{this.props.price}
            </div>
            <div className="w-full flex-none text-sm font-medium text-zinc-100 mt-2">
              {this.props.about}
            </div>
          </div>
          <div className="flex items-baseline mt-4 mb-6 pb-6 border-b border-zinc-200">
            <div className="space-x-2 flex text-sm list-none ">
              <label>
                <input
                  className="sr-only peer"
                  name="size"
                  type="radio"
                  value="xs"
                  checked
                />
                <Checked children="XS" />
              </label>
              <label>
                <input
                  className="sr-only peer"
                  name="size"
                  type="radio"
                  value="s"
                />
                <Checked children="S" />
              </label>
              <label>
                <input
                  className="sr-only peer"
                  name="size"
                  type="radio"
                  value="m"
                />
                <Checked children="M" />
              </label>
              <label>
                <input
                  className="sr-only peer "
                  name="size"
                  type="radio"
                  value="l"
                />
                <Checked children="L" />
              </label>
              <label>
                <input
                  className="sr-only peer"
                  name="size"
                  type="radio"
                  value="xl"
                />
                <Checked children="XL" />
              </label>
            </div>
          </div>
          <div className="flex space-x-4 mb-6 text-sm font-medium">
            <div className="flex-auto flex space-x-4">
          
              <button
                className="h-10 px-6 font-semibold rounded-md bg-zinc-950 text-zinc-200"
                type="button"
              >
                Compre
              </button>
              <button
                className="h-10 px-6 font-semibold rounded-md border border-zinc-200 text-zinc-200"
                type="button"
              >
                Adicione ao carrinho
              </button>
            </div>
          </div>
          <p className="text-sm text-zinc-100">
            Envios para todo pais(favor consultar o frete).
          </p>
        </form>
      </div>
    );
  }
}

export { Item };
