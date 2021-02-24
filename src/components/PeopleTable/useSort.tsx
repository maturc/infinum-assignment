import { useEffect, useState } from "react";

// The API does not suport sorting so I had to do it client side
// 0: unsorted
// 1: ascending
// 2: descending
function useSort( list: any ) {
  const [sortNameDirection,      setSortNameDirection]      = useState<0 | 1 | 2>(0);
  const [sortBirthYearDirection, setSortBirthYearDirection] = useState<0 | 1 | 2>(0);
  const [sortNameIcon,      setSortNameIcon]      = useState<"" | "↑" | "↓">("");
  const [sortBirthYearIcon, setSortBirthYearIcon] = useState<"" | "↑" | "↓">("");
  const [sortedArray, setSortedArray] = useState<Array<any>>(list);

  function ascendingSort( array: Array<any>, propertyName: string ) {
    return array.sort( function (a: any, b: any) {
      const nameA = a.props.person[propertyName].toUpperCase();
      const nameB = b.props.person[propertyName].toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
  }
  function descendingSort( array: Array<any>, propertyName: string ) {
    return ascendingSort(array, propertyName).reverse();
  }

  function handleNameClick(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    e.preventDefault();
    //@ts-ignore
    setSortNameDirection((prev)=> {
      return prev===2 ? 0 : (prev+1);
    });
    setSortBirthYearDirection(0);
    setSortedArray(sortTypeSwitch(list, "name", sortNameDirection));
  }
  function handleBirthYearClick(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    e.preventDefault();
    //@ts-ignore
    setSortBirthYearDirection((prev)=> {
      return prev===2 ? 0 : (prev+1);
    });
    setSortNameDirection(0);
    setSortedArray(sortTypeSwitch(list, "birth_year", sortBirthYearDirection));
  }

  function sortTypeSwitch( array: Array<any>, propertyName: string, key: number) {
    const newArray = [...array];
    switch (key) {
      case 0:
        return ascendingSort(newArray, propertyName);
      case 1:
        return descendingSort(newArray, propertyName);
      default:
        return array;
    }
  }
  function iconSwitch (key: number, setIcon: Function) {
    switch (key) {
      case 1:
        setIcon("↓");
        break;
      case 2:
        setIcon("↑");
        break;
      default:
        setIcon("");
    }
  }

  useEffect(() => {
    iconSwitch(sortNameDirection, setSortNameIcon);
  }, [sortNameDirection]);
  useEffect(() => {
    iconSwitch(sortBirthYearDirection, setSortBirthYearIcon);
  }, [sortBirthYearDirection]);

  return { handleNameClick, handleBirthYearClick, sortedArray, sortNameIcon, sortBirthYearIcon };
}

export default useSort;