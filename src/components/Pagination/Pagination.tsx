import PButton from "./PButton";
import "./Pagination.css";

type IPaginationProps = {
  currentPage: number;
  pageCount: number;
}

function Pagination( {currentPage, pageCount}: IPaginationProps ) {
  // -3 = "<"
  // -2 = "..."
  // -1 = ">"
  const conditionalButtons = [
    <PButton key={0} label={1} />,

    currentPage>4 ? <PButton key={1} label={-2} /> : <PButton key={2} label={2} />,

    currentPage<=4 ? <PButton key={3} label={3} /> :
      currentPage>(pageCount-3) ? <PButton key={4} label={pageCount-4} /> : <PButton key={5} label={currentPage-1} />,
    
    currentPage<=4 ? <PButton key={6} label={4} /> :
      currentPage>(pageCount-3) ? <PButton key={7} label={pageCount-3} /> : <PButton key={8} label={currentPage} />,
    
    currentPage<=4 ? <PButton key={9} label={5} /> :
    currentPage>(pageCount-3) ? <PButton key={10} label={pageCount-2} /> : <PButton key={11} label={currentPage+1} />,
    
    currentPage<(pageCount-3) ? <PButton key={12} label={-2} /> : <PButton key={13} label={pageCount-1} />,

    <PButton key={14} label={pageCount} />
  ]
  return (
    <div className="pagination">
      <PButton label={-3} disabled={ currentPage === 1 } />
      {conditionalButtons.splice(0,pageCount)}
      <PButton label={-1} disabled={ pageCount === currentPage } />
    </div>
  );
}

export default Pagination;