import { FiDownload } from "react-icons/fi";
import { MdEmail } from "react-icons/md";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import "./Navbar.css";

export default function Navbar({ toast, setToast }) {
  const handleCopy = (text, message) => {
    navigator.clipboard.writeText(text);
    setToast(message);
  };

  return (
    <>
      {toast && <div className="toast">{toast}</div>}
      <nav className="navbar">
        <div className="navbar-wrapper">
          <span className="connect-label">Connect</span>
          <div className="navbar-contacts">
            <MdEmail
              size={22}
              onClick={() =>
                handleCopy("svivek1702@gmail.com", "Email copied!")
              }
              title="Email"
            />
            <FaLinkedin
              size={20}
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/vivek-singh-3a8044160/",
                )
              }
              title="LinkedIn"
            />
            <FaTwitter
              size={20}
              onClick={() => window.open("https://x.com/svivek1702")}
              title="Twitter"
            />
            <FaPhone
              size={20}
              onClick={() => handleCopy("+917879059944", "Phone copied!")}
              title="Phone"
            />
          </div>
        </div>
        <a href="/Resume/Vivek_Resume.pdf" download className="button">
          <FiDownload size={20} />
          Download Resume
        </a>
      </nav>
    </>
  );
}
