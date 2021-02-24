import useSort from "./useSort";

type IListProps = {
  children: React.ReactChildren
}

function List( {children}: IListProps ) {
  const { handleNameClick, handleBirthYearClick, sortedArray: sortedChildren, sortNameIcon, sortBirthYearIcon } = useSort(children);
  return (
    <table>
      <thead>
        <tr>
          <th><a href="/" onClick={ (e)=>handleNameClick(e)      }>Name {sortNameIcon}</a></th>
          <th><a href="/" onClick={ (e)=>handleBirthYearClick(e) }>Birth Year {sortBirthYearIcon}</a></th>
        </tr>
      </thead>
      <tbody>
        {sortedChildren}
      </tbody>
    </table>
  );
}

export default List;