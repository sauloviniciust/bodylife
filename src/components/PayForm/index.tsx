import { Toast } from "../Toast";
import { useBuyer } from "../../Context/BuyerContext";
import { collection, addDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase/config";
import { Buyer } from "../../interface/Buyer";
import { useState } from "react";
interface PayFormProps {
  items: object;
  total: string;
  totalItems: number;
}

const PayForm: React.FC<PayFormProps> = ({ items, total, totalItems }) => {
  const { buyer, setBuyer } = useBuyer();
  const [formData, setFormData] = useState<Buyer>({
    name: "",
    email: "",
    phone: 0,
    message: "",
    method: "",
  });
  const ordersCollection = collection(db, "orders");
  const order = {
    buyer,
    items,
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    setBuyer(formData);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setBuyer(formData);

    addDoc(ordersCollection, order)
      .then((info) => info.id)
      .then((id) => {
        const orderDoc = doc(db, "orders", id);
        updateDoc(orderDoc, { total, totalItems });
      });
  };

  console.log(buyer);
  console.log(total);

  return (
    <section className="rounded-3xl container mx-auto" id="pay-form">
      <article className="bg-zinc-900 text-zinc-300 shadow-2xl border-zinc-900 border-4 rounded-3xl">
        <div className="p-6 shadow-2xl">
          <h3 className="text-3xl sm:text-5xl font-bold  mb-10">
            Informações de pagamento
          </h3>
          <p className="text-zinc-300  sm:text-2xl mb-10">
            Preencha os campos com seus dados e a forma de pagamento.
          </p>
        </div>
        <div className="p-6 bg-zinc-700 bg-opacity-80 max-h-full rounded-b-2xl h-fit z-10">
          <form
            className="space-y-8 text-xl  text-zinc-300"
            method="POST"
            onSubmit={handleSubmit}
          >
            <div>
              <div>
                <label htmlFor="name" className="block">
                  Nome:
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Digite seu nome completo..."
                  onChange={handleChange}
                  required
                  className="mb-8 w-full text-zinc-300 focus:outline-none px-4 py-2 bg-zinc-800 rounded-lg"
                />
              </div>
              <div>
                <label htmlFor="email" className="block ">
                  Email:
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Digite seu email..."
                  onChange={handleChange}
                  required
                  className="w-full text-zinc-300 focus:outline-none px-4 py-2 rounded-lg bg-zinc-800 "
                />
              </div>
            </div>
            <div>
              <label htmlFor="Phone" className="block">
                Telefone:
              </label>
              <input
                type="number"
                name="Phone"
                placeholder="Insira o numero do seu telefone"
                onChange={handleChange}
                required
                className="w-full text-zinc-300 focus:outline-none font-lighter px-4  py-2 rounded-lg bg-zinc-800 "
              />
            </div>
            <div>
              <label htmlFor="message" className="block ">
                Deixe uma mensagem e seu endereço:
              </label>
              <textarea
                name="message"
                placeholder="Deixe sua mensagem e endereço aqui..."
                onChange={handleChange}
                required
                className="w-full text-zinc-300 focus:outline-none px-4  py-2 rounded-lg bg-zinc-800 "
              ></textarea>
            </div>
            <div>
              <label htmlFor="method" className="block ">
                Forma de pagamento
              </label>
              <div className="mt-2">
                <select
                  name="method"
                  onChange={handleChange}
                  className="bg-zinc-800 block w-full rounded-md border-0 py-1.5 
				text-zinc-300 shadow-sm ring-1 ring-inset ring-zinc-500 focus:ring-2 
				focus:ring-inset focus:ring-zinc-300 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option value="" disabled selected>
                    Escolha uma opção
                  </option>
                  <option>Credito</option>
                  <option>Debito</option>
                  <option>Pix</option>
                </select>
              </div>
            </div>
            <div className="flex justify-center">
              <button type="submit">
                <Toast />
              </button>
            </div>
          </form>
        </div>
      </article>
    </section>
  );
};

export { PayForm };
