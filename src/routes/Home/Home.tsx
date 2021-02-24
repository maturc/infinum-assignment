import useFetch from "../../helpers/useFetch";
import List from "../../components/List/List";
import PeopleListItem from "../../components/List/PeopleListItem";
import Loading from "../../components/Loading/Loading";
import Pagination from "../../components/Pagination/Pagination";
import SearchBar from "../../components/SearchBar/SearchBar";
import useQuery from "../../helpers/useQuery";

function Home() {
  const {currentPage, searchQuery, setSearchQuery} = useQuery();  
  const fullSearchQuery = searchQuery ? "&search=" + searchQuery : "";
  const [people, peopleError, isLoadingPeople] = useFetch(`https://swapi.dev/api/people/?page=${currentPage + fullSearchQuery}`);

  let listItems;
  if(people) {
    listItems = people.results.map( (person: any) => {
      return <PeopleListItem key={person.name} person={person} />
    });
  }
  const renderList = peopleError ? <h2>{peopleError.message}</h2> : <List>{listItems}</List>;
  const pageCount = people ? Math.ceil(people.count/10) : 10;
  return (
    <>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      { isLoadingPeople ? <Loading /> : renderList }
      <Pagination currentPage={currentPage} pageCount={pageCount}/>
    </>
  );
}

export default Home;