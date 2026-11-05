import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <nav className="footer-nav">
        <Link href="/services">Services</Link>
        <Link href="/self-defense">Self-defense</Link>
        <Link href="/in-person">In person</Link>
        <Link href="/reviews">Reviews</Link>
        <Link href="/apply">Apply</Link>
      </nav>
      <div className="footer-meta">
        <span>Jon-Michael Kerestes</span>
        <a href="https://myca.live" target="_blank" rel="noopener noreferrer">MYCA</a>
        <a href="https://ideasintovideo.com" target="_blank" rel="noopener noreferrer">Ideas Into Video</a>
      </div>
    </footer>
  );
}
