import ListItem from "./list-item";
import Pages from "./pages";

const Menu = () => {
  return (
    <nav>
      <ul className="flex">
        <ListItem
          listStyle="text-white hover:text-orange-500 transition-all duration-300 mx-6"
          links="#"
          listTitle="Home"
        />
        <ListItem
          listStyle="text-white hover:text-orange-500 transition-all duration-300 mx-6"
          links="#"
          listTitle="Services"
        />
        <ListItem
          listStyle="text-white hover:text-orange-500 transition-all duration-300 mx-6"
          links="#"
          listTitle="About"
        />
        <Pages />
        <ListItem
          listStyle="text-white hover:text-orange-500 transition-all duration-300 mx-6 mr-10"
          links="#"
          listTitle="Testimonials"
        />
      </ul>
    </nav>
  );
};

export default Menu;
