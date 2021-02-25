import { useParams } from "react-router-dom";
import useFetch from "../../helpers/useFetch";

function useDetails() {
  const { id } = useParams<IParamTypes>();
  const [data, error, isLoading] = useFetch(`https://swapi.dev/api/people/${id}`);

  return [data, error, isLoading];
}

export default useDetails;