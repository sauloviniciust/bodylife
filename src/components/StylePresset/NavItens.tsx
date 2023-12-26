export default function NavItem({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li><a href={href}className={`flex gap-1 text-5xl 
                mx-auto font-bold lg:text-xl md:text-xl 
                md:font-normal hover:text-slate-600`}
      >{children}</a>
    </li>
  );
}