export default function NavItem({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <a
        href={href}
        className={`flex gap-1 text-5xl mx-auto font-bold md:font-normal md:text-xl lg:text-xl hover:text-slate-600`}
      >
        {children}
      </a>
    </li>
  );
}