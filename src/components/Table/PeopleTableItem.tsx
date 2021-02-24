type IPeopleTableItemProps = {
  person: any;
}
function PeopleTableItem( {person}: IPeopleTableItemProps ) {
  return (
    <>
      <tr>
        <td>{person.name}</td>
        <td>{person.birth_year}</td>
      </tr>
    </>
  );
}

export default PeopleTableItem;