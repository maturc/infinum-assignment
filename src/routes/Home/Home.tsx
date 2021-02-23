import useFetch from "../../customHooks/useFetch";
import List from "../../components/List/List";
import PeopleListItem from "../../components/List/PeopleListItem";
import Loading from "../../components/Loading/Loading";
import Pagination from "../../components/Pagination/Pagination";

function Home() {
  const [people, peopleError, isLoadingPeople] = useFetch("https://swapi.dev/api/people/");

  let listItemMap;
  if(people) {
    listItemMap = people.results.map( (person: any) => {
      return <PeopleListItem key={person.name} person={person} />
    });
  }
  const listRender = peopleError ? <h2>{peopleError.message}</h2> : <List>{listItemMap}</List>;

  return (
    <>
      {isLoadingPeople ? <Loading /> : listRender}
      <Pagination />
    </>
  );
}

export default Home;