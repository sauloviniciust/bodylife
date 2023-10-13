export default function NavItem({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <a
        href={href}
        className={`text-5xl mx-auto font-bold md:font-normal md:text-xl lg:text-2xl hover:text-slate-600`}
      >
        {children}
      </a>
    </li>
  );
}