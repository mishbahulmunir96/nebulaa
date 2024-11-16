import Menu from "../elements/Menu";

const FooterMenu = () => {
  return (
    <ul className="mb-2 flex w-full justify-around md:w-1/2">
      <Menu href={"/"} classname="font-normal">
        Beranda
      </Menu>
      <Menu href={"/about"} classname="font-normal">
        About
      </Menu>
      <Menu href={"/product"} classname="font-normal">
        Product
      </Menu>
      <Menu href={"/team"} classname="font-normal">
        Team
      </Menu>
    </ul>
  );
};

export default FooterMenu;
