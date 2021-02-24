//Placeholder
//Placeholder
//Placeholder
//Placeholder
//Placeholder
type IMovieTableItemProps = {
  person: any;
}
function MovieTableItem( {person}: IMovieTableItemProps ) {
  return (
    <>
      <li key={person.name}>{person.name}</li>
    </>
  );
}

export default MovieTableItem;