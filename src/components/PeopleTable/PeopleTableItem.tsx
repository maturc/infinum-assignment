import {Link} from "react-router-dom";

type IPeopleTableItemProps = {
  person: any;
}
function PeopleTableItem( {person}: IPeopleTableItemProps ) {
  const id = person.url.split("/")[5]
  return (
    <>
      <tr>
        <td><Link to={`/details/${id}`}>{person.name}</Link></td>
        <td>{person.birth_year}</td>
      </tr>
    </>
  );
}

export default PeopleTableItem;