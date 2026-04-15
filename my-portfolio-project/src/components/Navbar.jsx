import { FiDownload } from "react-icons/fi";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <a href="/Resume/Vivek_Resume.pdf" download className="button">
        <FiDownload size={20} />
        Download Resume
      </a>
    </nav>
  );
}
