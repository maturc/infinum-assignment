import { useState } from "react";
import { useParams } from "react-router-dom";

function useHome() {
  const { page, search } = useParams<IParamTypes>();
  const currentPage = Number(page ?? 1);
  
  const [searchQuery, setSearchQuery] = useState<string>(search ?? "");
  return { currentPage, searchQuery, setSearchQuery };
}

export default useHome;