import { Link } from "@tanstack/react-router";

export default function Header() {
  return (
    <header className="p-2 flex gap-2 bg-white text-black justify-between">
      <nav className="flex flex-row gap-4">
        <div className="px-2 font-bold">
          <Link to="/">Container Demo</Link>
        </div>
        <div className="px-2 font-bold">
          <Link to="/responsive-grid">Responsive Grid</Link>
        </div>
      </nav>
    </header>
  );
}
