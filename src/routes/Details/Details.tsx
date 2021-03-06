import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Loading from "../../components/Loading/Loading";
import useDetails from "./useDetails";
import "./Details.css";

function Details() {
  const [data, error, isLoading] = useDetails();

  const [filmList, setFilmList] = useState<any>([]);
  const [homeworld, setHomeworld] = useState<any>();
  
  // fetches array of films from an array of strings
  useEffect(() => {
    if(data) {
      Promise.all(data.films.map((url: any)=>fetch(url))).then(responses =>
        Promise.all(responses.map((film: any) => film.json()))
      ).then(data => {
        setFilmList(data)
      });
    //fetch homeworld
      fetch(data.homeworld)
        .then((response)=>response.json())
        .then((data)=> setHomeworld(data));
    }
  }, [data]);
  const renderFilmList = filmList.map( (film: any) => {
    return <li key={film.title}>{film.title}</li>
  });
  
  let renderTable;
  if (data) {
    renderTable = (
      <table className="details__table">
        <tbody>
          <tr>
            <th>Name</th>
            <td>{data.name}</td>
          </tr>
          <tr>
            <th>Height</th>
            <td>{data.height}</td>
          </tr>
          <tr>
            <th>Weight</th>
            <td>{data.mass}</td>
          </tr>
          <tr>
            <th>Birth Year</th>
            <td>{data.birth_year}</td>
          </tr>
          <tr>
            <th>Gender</th>
            <td>{data.gender}</td>
          </tr>
          <tr>
            <th>Homeworld</th>
            <td>{ homeworld ? homeworld.name : <Loading/> }</td>
          </tr>
          <tr>
            <th>Films</th>
            <td>
              <ul>{ filmList.length ? renderFilmList : <Loading /> }</ul>
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
  return (
    <>
      <Header />
      {isLoading ? <Loading /> :
        error? <h2>{error.message}</h2> : renderTable}
    </>
  );
}

export default Details;