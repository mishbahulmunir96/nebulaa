import Link from "next/link";
import Logo from "./elements/Logo";
import FooterMenu from "./fragments/FooterMenu";
import SocialMedia from "./fragments/SocialMedia";

const Footer = () => {
  return (
    <footer className="bg-[#FCEED5] px-2 md:px-36">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-between border-b border-slate-500 py-4 md:flex-row md:py-8">
          <FooterMenu />
          <SocialMedia className="w-full justify-around md:w-1/3" />
        </div>
        <div className="relative flex flex-col items-center justify-between pb-4 pt-20 text-slate-600 md:static md:flex-row md:py-4">
          <div>
            <p className="flex">&copy; 2024 Nebulaa. All rights reserved</p>
          </div>
          <div className="absolute left-[38%] top-2 md:static">
            <Logo />
          </div>
          <div className="mt-3 flex w-full justify-between px-4 md:mt-0 md:w-1/3">
            <Link href="/">Terms of Service</Link>
            <Link href="/">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
