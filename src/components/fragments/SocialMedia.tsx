import { GrInstagram } from "react-icons/gr";
import { FaWhatsapp } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
import { FC } from "react";
import Link from "next/link";

interface SocialMediaProps {
  className?: string;
}

const SocialMedia: FC<SocialMediaProps> = ({ className }) => {
  return (
    <div className={`flex ${className}`}>
      <Link
        href="https://www.instagram.com/nebulaa_craft/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Kunjungi Instagram Nebula Craft"
      >
        <GrInstagram size={32} className="text-slate-950" />
      </Link>

      <Link
        href="https://api.whatsapp.com/send/?phone=6285225126631&text&type=phone_number&app_absent=0"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat dengan Nebula Craft"
      >
        <FaWhatsapp size={32} className="text-slate-950" />
      </Link>

      <Link
        href="https://www.facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Kunjungi Facebook Nebula Craft"
      >
        <BsFacebook size={32} className="text-slate-950" />
      </Link>
    </div>
  );
};

export default SocialMedia;
