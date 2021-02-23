//Placeholder
//Placeholder
//Placeholder
//Placeholder
//Placeholder
type IPeopleListItem = {
  person: any;
}
function PeopleListItem( {person}: IPeopleListItem ) {
  return (
    <>
      <li key={person.name}>{person.name}</li>
    </>
  );
}

export default PeopleListItem;