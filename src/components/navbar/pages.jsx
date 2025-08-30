import SubMenu from "./sub-menu";
const Pages = () => {
  return (
    <li className="relative group h-10 text-white hover:text-orange-500 transition-all duration-300 mx-6">
      <a href="#">
        Pages
        <SubMenu />
        <i className="fa-solid fa-angle-down ml-2"></i>
      </a>
    </li>
  );
};

export default Pages;
