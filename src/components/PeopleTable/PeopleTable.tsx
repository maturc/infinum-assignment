import useSort from "./useSort";
import "./PeopleTable.css";

type ITableProps = {
  children: React.ReactChildren
}

function Table( {children}: ITableProps ) {
  const { handleNameClick, handleBirthYearClick, sortedArray: sortedChildren, sortNameIcon, sortBirthYearIcon } = useSort(children);
  return (
    <table>
      <thead className="table__header">
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

export default Table;