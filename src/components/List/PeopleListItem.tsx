type IPeopleListItem = {
  person: any;
}
function PeopleListItem( {person}: IPeopleListItem ) {
  return (
    <>
      <li>{person.name}</li>
    </>
  );
}

export default PeopleListItem;