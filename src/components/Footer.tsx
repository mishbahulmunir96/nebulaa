import Link from "next/link";
import Logo from "./elements/Logo";
import FooterMenu from "./fragments/FooterMenu";
import SocialMedia from "./fragments/SocialMedia";

const Footer = () => {
  return (
    <footer className="bg-[#FCEED5] px-2 lg:px-36">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-between border-b border-slate-500 py-4 lg:flex-row lg:py-8">
          <FooterMenu />
          <SocialMedia />
        </div>
        <div className="relative flex items-center justify-between pb-4 pt-20 md:static md:py-4">
          <div>
            <p className="flex flex-col md:flex-row">
              <span>&copy; 2024 Nebulaa. </span>
              <span>All rights reserved</span>
            </p>
          </div>
          <div className="absolute left-[38%] top-2 md:static">
            <Logo />
          </div>
          <div className="flex justify-around gap-4 md:gap-4">
            <Link href="/">Terms of Service</Link>
            <Link href="/">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
