import {Link} from "react-router-dom";

type IPeopleTableItemProps = {
  person: any;
}
function PeopleTableItem( {person}: IPeopleTableItemProps ) {
  const id = person.url.split("/")[5];
  return (
    <>
      <tr className="table__row">
        <td><Link to={`/details/${id}`}>{person.name}</Link></td>
        <td className="table__birth">{person.birth_year}</td>
      </tr>
    </>
  );
}

export default PeopleTableItem;