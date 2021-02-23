type IList = {
  children: React.ReactChildren
}
function List( {children}: IList ) {
  return (
    <ul>
      {children}
    </ul>
  );
}

export default List;