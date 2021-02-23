//import "./pagination.css";

import { useState } from "react";
import { useParams } from "react-router-dom";
import PButton from "./PButton";

function Pagination() {
  // @ts-ignore
  let { page } = useParams();
  const currentPage = Number(page) ?? 1;
  
  const [pageCount] = useState(10);
  // -3 = "<"
  // -2 = "..."
  // -1 = ">"
  return (
    <>
      <PButton label={-3} disabled={ currentPage === 1 } />
      <PButton label={1} />
      { currentPage>4 ? <PButton label={-2} /> : <PButton label={2} /> }

      {
        currentPage>(pageCount-3) ? <PButton label={6} /> :
        currentPage>4 ? <PButton label={currentPage-1} /> : <PButton label={3} />
      }
      {
        currentPage>(pageCount-3) ? <PButton label={7} /> :
        currentPage>4 ? <PButton label={currentPage} /> : <PButton label={4} />
      }
      {
        currentPage>(pageCount-3) ? <PButton label={8} /> :
        currentPage>4 ? <PButton label={currentPage+1} /> : <PButton label={5} />
      }
      { currentPage<(pageCount-3) ? <PButton label={-2} /> : <PButton label={9} /> }
      <PButton label={pageCount} />
      <PButton label={-1} disabled={ pageCount === currentPage } />
    </>
  );
}

export default Pagination;