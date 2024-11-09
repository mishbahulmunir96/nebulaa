import Link from "next/link";
import Logo from "./elements/Logo";
import FooterMenu from "./fragments/FooterMenu";
import SocialMedia from "./fragments/SocialMedia";

const Footer = () => {
  return (
    <div className="bg-[#FCEED5] px-2 lg:px-36">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-between border-b border-slate-500 lg:flex-row lg:py-8">
          <FooterMenu />
          <SocialMedia />
        </div>
        <div className="flex items-center justify-between py-4">
          <div>
            <p>&copy; 2024 Nebulaa. All rights reserved</p>
          </div>
          <div>
            <Logo />
          </div>
          <div className="flex justify-between">
            <Link href="/">Terms of Service</Link>
            <Link href="/">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
