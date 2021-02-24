import React from "react";
import PeopleTable from "../../components/PeopleTable/PeopleTable";
import PeopleListItem from "../../components/PeopleTable/PeopleTableItem";
import Loading from "../../components/Loading/Loading";

function useRenderHome( people: any, peopleError: any, isLoadingPeople: boolean) {
  let listItems;

  if(people) {
    listItems = people.results.map( (person: any) => {
      return <PeopleListItem key={person.name} person={person} />
    });
  }
  const peopleList = isLoadingPeople ? <Loading /> :
                       peopleError ? <h2>{peopleError.message}</h2> : <PeopleTable>{listItems}</PeopleTable>;
  
  return [peopleList];
}

export default useRenderHome;