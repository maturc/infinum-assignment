import Pagination from "../../components/Pagination/Pagination";
import SearchBar from "../../components/SearchBar/SearchBar";
import useHome from "./useHome";

function Home() {
  const { searchQuery, setSearchQuery, currentPage, pageCount, peopleList } = useHome();
  
  return (
    <div>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      { peopleList }
      <Pagination currentPage={currentPage} pageCount={pageCount}/>
    </div>
  );
}

export default Home;