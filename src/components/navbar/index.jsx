import Menu from "./menu";
import Button from "../button/button";
const NavBar = () => {
  return (
    <div className="flex items-center">
      <Menu />
      <div>
        <Button
          btnStyle="btn btn-success px-10 py-6 text-white shadow-none text-base"
          btnType="button"
          btnTitle="Contact Support"
        />
      </div>
    </div>
  );
};

export default NavBar;
