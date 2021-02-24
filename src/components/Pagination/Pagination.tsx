//import "./pagination.css";
import PButton from "./PButton";

type IPaginationProps = {
  currentPage: number;
  pageCount: number;
}

function Pagination( {currentPage, pageCount}: IPaginationProps ) {
  // -3 = "<"
  // -2 = "..."
  // -1 = ">"
  const conditionalButtons = [
    <PButton label={1} />,

    currentPage>4 ? <PButton label={-2} /> : <PButton label={2} />,

    currentPage<=4 ? <PButton label={3} /> :
      currentPage>(pageCount-3) ? <PButton label={pageCount-4} /> : <PButton label={currentPage-1} />,
    
    currentPage<=4 ? <PButton label={4} /> :
      currentPage>(pageCount-3) ? <PButton label={pageCount-3} /> : <PButton label={currentPage} />,
    
    currentPage<=4 ? <PButton label={5} /> :
    currentPage>(pageCount-3) ? <PButton label={pageCount-2} /> : <PButton label={currentPage+1} />,
    
    currentPage<(pageCount-3) ? <PButton label={-2} /> : <PButton label={pageCount-1} />,

    <PButton label={pageCount} />
  ]
  return (
    <>
      <PButton label={-3} disabled={ currentPage === 1 } />
      {conditionalButtons.splice(0,pageCount)}
      <PButton label={-1} disabled={ pageCount === currentPage } />
    </>
  );
}

export default Pagination;