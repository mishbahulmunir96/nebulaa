import { GrInstagram } from "react-icons/gr";
import { FaWhatsapp } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
import { FC } from "react";

interface SocialMediaProps {
  className?: string;
}

const SocialMedia: FC<SocialMediaProps> = ({ className }) => {
  return (
    <div className={`flex ${className}`}>
      <a
        href="https://www.instagram.com/nebulaa_craft/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GrInstagram size={32} className="text-slate-950" />
      </a>

      <a
        href="https://api.whatsapp.com/send/?phone=6285225126631&text&type=phone_number&app_absent=0"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp size={32} className="text-slate-950" />
      </a>

      <a
        href="https://www.facebook.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsFacebook size={32} className="text-slate-950" />
      </a>
    </div>
  );
};

export default SocialMedia;
