import { useState } from "react";
import { useHistory } from "react-router-dom";

type ISearchBarProps = {
  searchQuery: string;
  setSearchQuery: Function;
}

function SearchBar( {searchQuery, setSearchQuery}: ISearchBarProps ) {
  const [filter, setFilter] = useState(searchQuery);
  const [timeoutVar, setTimeoutVar] = useState<any>();
  const history = useHistory();

  function handleSearch(value: string) {
    setFilter(value);
    clearTimeout(timeoutVar);
    history.push(`/1/${value}`);
    setTimeoutVar(setTimeout(() => {
      setSearchQuery(value);
    }, 400));
  }

  return (
    <input type="text" value={filter} onChange={(e) => handleSearch(e.target.value)} />
  );
}

export default SearchBar;