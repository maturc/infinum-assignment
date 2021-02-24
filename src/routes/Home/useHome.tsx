import useFetch from "../../helpers/useFetch";
import useQuery from "../../helpers/useQuery";
import useRenderHome from "./useRenderHome";

function useHome() {
  const {currentPage, searchQuery, setSearchQuery} = useQuery();  
  const fullSearchQuery = searchQuery ? "&search=" + searchQuery : "";
  const [people, peopleError, isLoadingPeople] = useFetch(`https://swapi.dev/api/people/?page=${currentPage + fullSearchQuery}`);
  
  const [peopleList] = useRenderHome(people, peopleError, isLoadingPeople);
  const pageCount = people ? Math.ceil(people.count/10) : 10;

  return { searchQuery, setSearchQuery, currentPage, pageCount, peopleList };
}

export default useHome;