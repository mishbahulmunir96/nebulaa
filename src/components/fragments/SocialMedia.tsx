import Link from "next/link";
import { GrInstagram } from "react-icons/gr";
import { FaWhatsapp } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";

const SocialMedia = () => {
  return (
    <div className="flex w-full justify-around lg:w-1/4">
      <Link href="https://www.instagram.com/nebulaa_craft/">
        <GrInstagram size={32} />
      </Link>
      <Link href="https://www.wa.me/+62 85225126631">
        <FaWhatsapp size={32} />
      </Link>
      <Link href="https://www.facebook.com">
        <BsFacebook size={32} />
      </Link>
    </div>
  );
};

export default SocialMedia;
