import ListItem from "./list-item";

const SubMenu = () => {
  return (
    <ul className="bg-white absolute left-0  -top-16 hidden w-40  text-black shadow-lg group-hover:block group-hover:top-10   rounded-md transition duration-300">
      <ListItem
        listStyle="text-gray-800 border-b p-2 border-b-gray-200 hover:pl-4 hover:text-orange-500 transition-all duration-300 "
        links="#"
        listTitle="About Us"
      />
      <ListItem
        listStyle="text-gray-800 border-b p-2 border-b-gray-200 hover:pl-4 hover:text-orange-500 transition-all duration-300 "
        links="#"
        listTitle="Our Services"
      />
      <ListItem
        listStyle="text-gray-800  p-2  hover:pl-4 hover:text-orange-500 transition-all duration-300 "
        links="#"
        listTitle="Contact Us"
      />
    </ul>
  );
};
export default SubMenu;
