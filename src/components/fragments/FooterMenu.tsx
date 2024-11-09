import Menu from "../elements/Menu";

const FooterMenu = () => {
  return (
    <ul className="flex lg:w-1/2">
      <Menu href={"/"} classname="font-normal">
        Beranda
      </Menu>
      <Menu href={"/"} classname="font-normal">
        About
      </Menu>
      <Menu href={"/"} classname="font-normal">
        Product
      </Menu>
      <Menu href={"/"} classname="font-normal">
        Team
      </Menu>
    </ul>
  );
};

export default FooterMenu;
