
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function Toast(){
  const notify = () => toast("🦄 Compra realizada com sucesso!!!");

  return (
    <div>
      <button className="bg-black text-zinc-300 font-semibold py-2 px-4 rounded-md hover:bg-gray-800"
              onClick={notify}>Finalizar compra</button>
      <ToastContainer />
    </div>
  );
}