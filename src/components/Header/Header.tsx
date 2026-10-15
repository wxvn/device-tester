const links = [
  { name: "Mice", href: "#" },
  { name: "Keyboard", href: "#" },
];

function Header() {
  return (
    <header className="sticky top-4 z-50">
      <div className="flex justify-between items-center mx-auto max-w-5xl bg-white rounded-2xl px-8 py-4 shadow-lg">
        <a className="text-2xl font-bold" href="#">
          Device test
        </a>

        <ul className="flex gap-3.5 pr-6">
          {links.map((link) => (
            <li key={link.name}>
              <a href={link.href}>{link.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

export default Header;
