//Placeholder
//Placeholder
//Placeholder
//Placeholder
//Placeholder
type IPeopleListItemProps = {
  person: any;
}
function PeopleListItem( {person}: IPeopleListItemProps ) {
  return (
    <>
      <li key={person.name}>{person.name}</li>
    </>
  );
}

export default PeopleListItem;