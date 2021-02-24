type IListProps = {
  children: React.ReactChildren
}

function List( {children}: IListProps ) {
  return (
    <table>
      <thead>
        <tr>
          <th><a href="#">Name</a></th>
          <th><a href="#">Birth Year</a></th>
        </tr>
      </thead>
      <tbody>
        {children}
      </tbody>
    </table>
  );
}

export default List;