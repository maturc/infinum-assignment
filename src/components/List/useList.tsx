import { useState } from "react";

function useList() {
  const [sortNameDirection, setSortNameDirection] = useState<"ascending" | "descending" | null>(null);
  const [sortBirthYearDirection, setSortBirthYearDirection] = useState<"ascending" | "descending" | null>(null);

  const sortMask = [null, "ascending", "descending"];

  function handleNameClick() {

  }
  function handleBirthYearClick() {

  }
}

export default useList;