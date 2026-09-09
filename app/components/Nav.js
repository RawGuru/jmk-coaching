import Link from "next/link";

export default function Nav() {
  return (
    <header className="navbar">
      <Link href="/" className="brand">Jon-Michael Kerestes</Link>
      <nav className="navlinks">
        <Link href="/self-defense">Self-defense</Link>
        <Link href="/apply">Apply</Link>
      </nav>
    </header>
  );
}
