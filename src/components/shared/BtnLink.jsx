import { Link } from "react-router-dom";
import '../../border-animation.css';

export const BtnLink = ({ href, text, className }) => {
  return (
    <Link
      to={href}
      className={`border-gradient block w-full md:w-max text-center font-bold rounded-[16px] outline-none bg-gradient-to-r from-[#8120D5] to-[#C397E8] hover:shadow-[0px_0px_30px_0px_#B57FE459] transition-shadow duration-300 ${className}`}
    >
      <span className="relative z-10 text-white">{text}</span>
    </Link>
  );
};
