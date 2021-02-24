type IPeopleListItemProps = {
  person: any;
}
function PeopleListItem( {person}: IPeopleListItemProps ) {
  return (
    <>
      <tr>
        <td>{person.name}</td>
        <td>{person.birth_year}</td>
      </tr>
    </>
  );
}

export default PeopleListItem;