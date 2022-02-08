import logo from '../../../assets/logo.svg';
import Search from '../../../ui/components/forms/Search';

function Navbar() {
  return (
    <nav className="bg-primary shadow-lg fixed w-full h-[80px]">
      <div className="mx-auto px-4 h-full">
        <div className="flex justify-between items-center h-full">
          <img alt="logo" className="h-full w-[150px]" src={logo} />
          <Search />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
