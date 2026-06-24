import { FaFacebook } from 'react-icons/fa';
import "./FacebookBtn.css"

function FacebookBtn() {
  return (
    <a
      href="https://www.facebook.com/LaMiaWoufcompagnie/"
      target="_blank"
      rel="noopener noreferrer"
      className="fcb-btn"
    >
      <FaFacebook size={20}/> Suivez-nous sur Facebook
    </a>
  );
}

export default FacebookBtn;
