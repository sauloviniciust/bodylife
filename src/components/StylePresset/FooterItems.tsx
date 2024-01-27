export default function FooterItem({ href, children }: 
  { href: string; children: React.ReactNode }) {
  return (
    <a href={href}className={`hover:text-zinc-600`}
      >{children}</a>
   
  );
}