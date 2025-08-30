const ListItem = ({ listStyle, listTitle, links }) => {
  // if(children){
  //   return(
  //     <li className={listStyle} ><a href={links}></a></li>
  //   )
  // }

  return (
    <li className={listStyle}>
      <a href={links}>{listTitle}</a>
    </li>
  );
};

export default ListItem;
