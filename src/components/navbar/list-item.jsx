const ListItem = ({ listStyle, listTitle, links }) => {
  return (
    <li className={listStyle}>
      <a href={links}>{listTitle}</a>
    </li>
  );
};

export default ListItem;
