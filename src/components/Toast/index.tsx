
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function Toast(){
  const notify = () => toast("🦄 Compra realizada com sucesso!!!");

  return (
    <div>
      <button className="bg-black text-zinc-300 font-semibold 
      py-2 px-4 rounded-md hover:text-black hover:bg-zinc-600 
      shadow-xl hover:shadow-zinc-900"
              onClick={notify}>Finalizar compra</button>
      <ToastContainer />
    </div>
  );
}