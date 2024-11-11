import Logo from "./elements/Logo";
import MenuBar from "./fragments/MenuBar";
import SearchBar from "./fragments/SearchBar";

const Navbar = () => {
  return (
    <header className="fixed z-50 flex h-20 w-full items-center justify-center px-2 lg:px-36">
      <nav className="container mx-auto flex items-center justify-between">
        <Logo classname="order-2 lg:order-none"></Logo>
        <MenuBar classname="order-1 lg:order-none" />
        <SearchBar classname="order-3 lg:order-none" />
      </nav>
    </header>
  );
};

export default Navbar;
