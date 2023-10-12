export default function NavItem({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <a
        href={href}
        className={`text-2xl hover:text-slate-600`}
      >
        {children}
      </a>
    </li>
  );
}