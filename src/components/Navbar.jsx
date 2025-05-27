import logo from "../assets/Vijay.png";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Navbar = () => {  
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <img className="mx-2 w-10" src={logo} alt="logo" />
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/vijaychandra-kesari-14bba5367/" className='icon'>
          <FaLinkedin />
        </a>
        <a href="https://www.github.com/vizchan99" className='icon'>
          <FaGithub />
        </a>
        </div>
    </nav>
  );
};

export default Navbar;
