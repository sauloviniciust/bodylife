interface IProps {
  children: string;
}

const Button = ({children}: IProps) => {
  return (
    <a className="mt-2 bg-zinc-950 font-semibold
       hover:bg-zinc-600 text-zinc-200 py-2 
       hover:text-black inline-block px-4 rounded">
        {children}</a>
  )
};

export { Button };
