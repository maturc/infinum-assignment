import React from "react";
import List from "../../components/List/List";
import PeopleListItem from "../../components/List/PeopleListItem";
import Loading from "../../components/Loading/Loading";

function useRenderHome( people: any, peopleError: any, isLoadingPeople: boolean) {
  let listItems;

  if(people) {
    listItems = people.results.map( (person: any) => {
      return <PeopleListItem key={person.name} person={person} />
    });
  }
  const peopleList = isLoadingPeople ? <Loading /> :
                       peopleError ? <h2>{peopleError.message}</h2> : <List>{listItems}</List>;
  
  return [peopleList];
}

export default useRenderHome;