
export default function NavItem({ href, children}) {
  
  
  return (
    <li>
      <a
        href={href}
        className={`text-2xl hover:text-slate-600`}
      >
        {children}
      </a>
    </li>
  )
}
