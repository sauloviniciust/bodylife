export default function Checked({  children }: {  children: React.ReactNode }) {

  return (
   
      <div className={`peer-checked:font-semibold peer-checked:bg-zinc-900 
      peer-checked:text-white w-9 h-9 rounded-lg flex items-center justify-center
       hover:text-zinc-600 text-zinc-100 `}>{children}</div>
  );
}